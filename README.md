# PrismPath Website

The official landing page for [PrismPath](https://github.com/JackSarg/PrismPath),
an XPath assistant for more stable Blue Prism browser automations.

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The local site is served at `http://localhost:3000`.

## Validation

```bash
npm run lint
npm test
npm audit --omit=dev
```

`npm test` creates a production build and checks the rendered landing page,
security headers, core links, and required brand assets.

## Project structure

- `app/` contains the page, metadata, and styling.
- `public/` contains PrismPath artwork, browser icons, and product screenshots.
- `worker/` contains the Cloudflare Worker entry point and response security headers.
- `.openai/hosting.json` contains the Sites project identifier.

The Chrome and Edge buttons currently link to the browser-specific installation
instructions in the PrismPath repository. They can be replaced with extension
store URLs when the listings are available.
