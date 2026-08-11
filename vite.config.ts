import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import type { Plugin } from 'vite'

// Plugin to resolve figma:asset/ imports to local src/assets/ files
function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-resolver',
    enforce: 'pre',
    resolveId(source) {
      if (source.startsWith('figma:asset/')) {
        const filename = source.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Proxy plugin: forwards POST /api/openai to Azure OpenAI, and handles /api/auth locally
function openaiProxyPlugin(): Plugin {
  return {
    name: 'openai-proxy',
    configureServer(server) {
      const env = loadEnv('development', process.cwd(), '')

      // Auth endpoint — in dev, always allow (no password gate)
      server.middlewares.use('/api/auth', async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ ok: true }))
      })

      server.middlewares.use('/api/openai', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method not allowed')
          return
        }

        const endpoint = env.AZURE_OPENAI_ENDPOINT
        const apiKey = env.AZURE_OPENAI_API_KEY
        const deployment = env.AZURE_OPENAI_DEPLOYMENT || 'gpt-4.1-mini'

        if (!endpoint || endpoint.includes('YOUR-RESOURCE-NAME') || !apiKey || apiKey === 'REPLACE_WITH_YOUR_KEY') {
          res.statusCode = 503
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Azure OpenAI not configured. Set AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, and AZURE_OPENAI_DEPLOYMENT in .env' }))
          return
        }

        try {
          const chunks: Buffer[] = []
          for await (const chunk of req) chunks.push(chunk as Buffer)
          const body = JSON.parse(Buffer.concat(chunks).toString())

          const url = `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=2024-12-01-preview`

          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'api-key': apiKey,
            },
            body: JSON.stringify({
              messages: body.messages || [],
              max_tokens: body.max_tokens || 300,
              temperature: body.temperature ?? 0.7,
            }),
          })

          const data = await response.json() as Record<string, unknown>
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        } catch (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: String(err) }))
        }
      })
    },
  }
}

// HTTPS (self-signed) is the default — needed for iOS PWA / device testing.
// Set VITE_NO_HTTPS=1 to serve plain HTTP (e.g. for the VSCode integrated
// browser, which can't get past the self-signed cert).
const useHttps = process.env.VITE_NO_HTTPS !== '1'
// Optional base path for static hosts like GitHub Pages.
const basePath = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base: basePath,
  server: {
    // Required for temporary public tunnels (localhost.run/localtunnel) during demos.
    allowedHosts: true,
  },
  plugins: [
    figmaAssetPlugin(),
    openaiProxyPlugin(),
    ...(useHttps ? [basicSsl()] : []),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
