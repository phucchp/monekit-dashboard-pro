# Monekit Dashboard

A production-focused React admin dashboard for monetization operations: products, virtual currencies, and offerings.

This repository is built for fast iteration on internal tools with clean routing, typed UI modules, and GitHub Pages auto-deployment.

## Live Demo

- Production URL: [https://phucchp.github.io/monekit-dashboard-pro/](https://phucchp.github.io/monekit-dashboard-pro/)

## Tech Stack

- React 19 + TypeScript
- Vite 7
- React Router 7
- Redux Toolkit + React Redux
- Tailwind CSS 4
- ESLint + Prettier

## Current Product Scope

- Dashboard and project navigation shell
- Product management:
  - Product list
  - Product detail
  - Product create
- Virtual currency management:
  - Currency list
  - Currency detail/edit
  - Currency create
- Offering management:
  - Offering list
  - Offering detail/edit
  - Offering create
- Supporting pages:
  - Projects, Customers, Settings, Auth pages

## Project Structure

```text
src/
  app/                 # Redux store and app hooks
  features/            # Feature modules (screen + local data/components)
    product-*/
    virtual-currency-*/
    offering-*/
    project-*/
    customers/
    ui/
  layouts/             # App shell layout (sidebar + outlet)
  pages/               # Route-level page wrappers
  router.tsx           # Route definitions
  main.tsx             # App entry
```

## Routing

Main routes are defined in `src/router.tsx`.

- `/` dashboard
- `/projects`
- `/customers`
- `/products`
- `/products/new`
- `/products/:productId`
- `/virtual-currencies`
- `/virtual-currencies/new`
- `/virtual-currencies/:currencyId`
- `/offerings`
- `/offerings/new`
- `/offerings/:offeringId`
- `/settings`
- `/login`
- `/signup`
- `/forgot-password`

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

### Install

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`).

## Scripts

- `npm run dev`: Start local dev server
- `npm run build`: Type-check and create production build
- `npm run preview`: Preview built app locally
- `npm run lint`: Run ESLint
- `npm run format`: Format codebase using Prettier
- `npm run format:check`: Verify formatting

## Build and Release

### Production build

```bash
npm run build
```

Build output is generated in `dist/`.

### Deployment (GitHub Pages)

Deployment is fully automated via GitHub Actions (`.github/workflows/deploy.yml`):

1. Push changes to `main`
2. Workflow builds the project
3. `dist/` is published to `gh-pages`
4. GitHub Pages serves the latest version

## Engineering Notes

- The app uses `basename: /monekit-dashboard-pro/` in router config for GitHub Pages compatibility.
- Feature screens are organized under `src/features/*` to keep route wrappers thin and maintainable.
- UI currently uses local mock data in feature modules to support rapid design iteration.

## Contribution Workflow

1. Create a branch from `main`
2. Implement changes with focused commits
3. Run:
   - `npm run lint`
   - `npm run build`
4. Open PR to `main`
5. Merge and let Actions deploy
