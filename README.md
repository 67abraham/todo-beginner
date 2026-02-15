# camp2 (Vite + React) — Project Documentation

## Overview
camp2 is a lightweight React application scaffolded with Vite. It includes a set of basic pages (Index, Login, Registrar, Todo), a simple Navbar component, and global styling. It’s intended as a starting point for experiments or small applications.

## Stack
- React 18
- Vite (development server and build tooling)
- ESLint (basic configuration)

## Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+ (or yarn/pnpm if preferred)

Verify versions:
- node -v
- npm -v

## Quick Start
1) Install dependencies
- npm install

2) Start the development server
- npm run dev
- Open the URL printed by Vite (typically http://localhost:5173)

3) Build for production
- npm run build
- Output is generated in dist/

4) Preview the production build locally
- npm run preview

## Scripts (package.json)
- dev: Start Vite’s development server
- build: Build for production
- preview: Preview the production build
- lint: Run ESLint checks (if configured)

Run example:
- npm run dev

## Project Structure
- public/
  - vite.svg — example static asset
- src/
  - assets/
    - react.svg — example asset
  - compoent/  [Note: this name is as in the repository; you may rename to components if desired]
    - Navbar.jsx — navigation bar component
  - pages/
    - Index.jsx — landing/home page
    - Login.jsx — login page
    - Registrar.jsx — user registration page
    - Todo.jsx — simple todo page
    - serve.js — helper/stub script (inspect the file to determine its purpose)
  - App.jsx — root React component
  - main.jsx — application entry point (creates root and renders App)
  - index.css — global stylesheet
- index.html — root HTML template used by Vite
- vite.config.js — Vite configuration
- eslint.config.js — ESLint configuration
- package.json — dependencies and scripts
- README.md — project documentation

Note on naming: If you rename compoent/ to components/, update all import paths accordingly.

## Pages and Components
- Navbar.jsx
  - Basic navigation bar. Centralize links to Index, Login, Registrar, Todo or your own sections.
- Index.jsx
  - Default landing page; place general content or navigation here.
- Login.jsx
  - Scaffold for a login form or authentication UI.
- Registrar.jsx
  - Scaffold for a user registration form.
- Todo.jsx
  - Basic todo-like page structure to illustrate stateful UI.
- serve.js
  - Utility/server-stub located in src/pages; confirm intended usage. If purely client-side, consider relocating/renaming for clarity.

## Routing
This project provides multiple page components, but no router is included by default.
- Option A: Add react-router-dom and configure routes in App.jsx
  - npm i react-router-dom
  - Wrap the app with BrowserRouter and define Routes/Route for Index, Login, Registrar, Todo
- Option B: Manually render a single page in App.jsx for prototypes or demos

## Styling
- Global styles live in src/index.css.
- You can add CSS Modules, a utility framework (e.g., Tailwind CSS), or a component library as needed.

## Environment Variables
Vite loads variables prefixed with VITE_ from .env files.
- Example: create .env.local with VITE_API_URL=https://example.com
- Access in code via import.meta.env.VITE_API_URL
- See https://vitejs.dev/guide/env-and-mode.html for details

## Code Quality
- Lint (if configured): npm run lint
- Adjust eslint.config.js to match your team’s style rules. Consider adding Prettier for consistent formatting.

## Testing (Optional)
This scaffold does not include tests by default. Suggested setup:
- Unit tests: Vitest + @testing-library/react
- Install dev deps:
  - npm i -D vitest @testing-library/react @testing-library/jest-dom jsdom
- Example scripts to add in package.json:
  - "test": "vitest",
  - "test:watch": "vitest --watch"

## Deployment
The production build in dist/ is static and can be hosted on:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting provider

Common gotchas:
- Deploying under a subpath (e.g., /repo-name): set base in vite.config.js
- If using client-side routing (react-router-dom), configure your host for SPA fallback to index.html

## Troubleshooting
- Dev server port in use
  - Run with a different port: npm run dev -- --port=5174
  - Or set server.port in vite.config.js
- Module not found
  - Verify file/folder renames and import paths, especially if you change compoent to components
- Blank page after deploy
  - Check base in vite.config.js and ensure SPA fallback if routing is added
- ESLint errors
  - Run npm run lint and resolve issues or adjust rules in eslint.config.js

## Conventions and Recommendations
- Prefer function components and React hooks.
- Use ES Modules; keep assets in src/assets and import them.
- Maintain a consistent folder naming convention (e.g., components/). If you refactor folders, update imports.

## License
No explicit license is provided. Add a LICENSE file if you plan to open source or distribute this project.
