
  # Mobile Teams Meeting Multitasking IA

  This is a code bundle for Mobile Teams Meeting Multitasking IA. The original project is available at https://www.figma.com/design/zkYdGN3gZ0NyPhPExF8Xha/Mobile-Teams-Meeting-Multitasking-IA.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

    ## Deploying To Azure Static Web Apps

    This repo already includes an Azure Static Web Apps workflow in `.github/workflows/azure-static-web-apps-black-sea-0ec06df10.yml`.

    1. Push this project to GitHub (if not already).
    2. In Azure Portal, create a **Static Web App**.
    3. During creation:
      - Deployment source: **GitHub**
      - Branch: `main`
      - Build preset: **Custom**
      - App location: `/`
      - API location: `api`
      - Output location: `dist`
    4. After resource creation, copy the deployment token from:
      - Static Web App -> **Manage deployment token**
    5. In GitHub repo settings, add this secret:
      - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN_BLACK_SEA_0EC06DF10`
      - Value: deployment token from Azure
    6. Push to `main` to deploy, or run the workflow manually from the Actions tab.

    Once deployment finishes, Azure provides a public URL that anyone can open.
  