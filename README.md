# Wavy Media — Landing Page

Modern marketing site for **Wavy Media**, built with Next.js 15, Tailwind CSS v4, Framer Motion, and next-themes (dark default + light mode).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and optionally set:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

Without this, the contact form opens a `mailto:` draft to `waveymedia.business@gmail.com`.

## Customize content

Edit [`src/lib/content.ts`](src/lib/content.ts) for copy, stats, services, FAQ, and contact details.

## Brand assets

- Replace [`public/logo.svg`](public/logo.svg) with your logo (or add `logo.png` and update [`src/components/layout/logo.tsx`](src/components/layout/logo.tsx)).
- Update accent colors in [`src/app/globals.css`](src/app/globals.css) (`--accent`, `--accent-secondary`).

## Deploy to waveymedia.in (Vercel)

1. Push this repo to GitHub.
2. Import the project at [vercel.com](https://vercel.com) → **Add New Project**.
3. Framework preset: **Next.js** (auto-detected).
4. Add `NEXT_PUBLIC_FORM_ENDPOINT` in **Settings → Environment Variables** if using Formspree.
5. Deploy, then in your domain registrar for `waveymedia.in`:
   - Add Vercel’s A record or CNAME as shown in **Project → Settings → Domains**.
6. Set `www.waveymedia.in` redirect to apex if desired.
7. After DNS propagates, retire the old site.

## Scripts

| Command        | Description          |
|----------------|----------------------|
| `npm run dev`  | Development server   |
| `npm run build`| Production build     |
| `npm run start`| Serve production     |
| `npm run lint` | ESLint               |

## Tech stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- next-themes
- Framer Motion
- Lucide React
