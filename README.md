# Aurora MedRobotics Website

Marketing website for a hospital robotics and AI platform, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI + shadcn/ui style components

## Local Development

### Prerequisites

- Node.js 20+ (recommended)
- pnpm (recommended, lockfile is `pnpm-lock.yaml`)

### Install

```bash
pnpm install
```

### Run Dev Server

```bash
pnpm dev
```

Open `http://localhost:3000`.

### Production Build

```bash
pnpm build
pnpm start
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run linting

## Deploy To Vercel

1. Push this repository to GitHub: `https://github.com/cng13m/Aurora-MedRobotics.git`
2. Go to `https://vercel.com/new`
3. Import the GitHub repo
4. Keep defaults (Vercel auto-detects Next.js)
5. Click **Deploy**

After first deploy, each push to the production branch triggers an automatic deployment.
