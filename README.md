# MiHaTo Website

Corporate website source for MiHaTo.

## Requirements

- Node.js 22.13 or newer
- pnpm 11.25.0

## Local development

```bash
pnpm install
pnpm dev
```

The local development command keeps the project's existing Vinext/Vite workflow.

## Production build

```bash
pnpm build
pnpm start
```

The production build uses Next.js directly so the project can be deployed on Vercel with the Next.js preset.

## Vercel

Import this repository into Vercel and keep:

- Framework / Application Preset: Next.js
- Root Directory: `./`
- Build Command: project default (`pnpm run build`)
- Output Directory: Next.js default
- Install Command: project default (`pnpm install`)

No environment variables are required by the current public website.
