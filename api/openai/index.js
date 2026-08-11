module.exports = async function (context, req) {
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
  const apiKey = process.env.AZURE_OPENAI_API_KEY;
  const deployment = process.env.AZURE_OPENAI_DEPLOYMENT || "gpt-4.1-mini";

  if (!endpoint || !apiKey) {
    context.res = {
      status: 503,
      headers: { "Content-Type": "application/json" },
      body: { error: "Azure OpenAI not configured." },
    };
    return;
  }

  try {
    const { messages, max_tokens, temperature } = req.body;

    const url = `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=2024-12-01-preview`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        messages: messages || [],
        max_tokens: max_tokens || 300,
        temperature: temperature ?? 0.7,
      }),
    });

    const data = await response.json();

    context.res = {
      status: response.status,
      headers: { "Content-Type": "application/json" },
      body: data,
    };
  } catch (err) {
    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: { error: String(err) },
    };
  }
};
