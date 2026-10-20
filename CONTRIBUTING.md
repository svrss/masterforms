# Contributing

Thanks for your interest in masterforms! I am more than happy to accept code from external contributors, given the conventions below are followed.

## Setup

You need Git, Docker and [mise](https://mise.jdx.dev). mise installs everything else (Bun, gitleaks, Lefthook) at the versions the project pins. No editor setup is required.

    mise trust && mise install
    mise run setup     # dependencies, git hooks, .env
    mise run dev       # Postgres + API + web on http://localhost:5173

Before opening a PR, run `mise run check`. It runs exactly what CI runs: lint, typecheck, tests and a secret scan.

- `bun run test` runs the test suite (Vitest). `bun test` is Bun's own runner and isn't used here.
- `mise run format` formats everything with Biome. A pre-commit hook also formats staged files and blocks commits that contain secrets.
- Want in-editor formatting and lint? Point your editor's Biome extension at the project's Biome (`node_modules/@biomejs/biome`).

## Project layout

- `apps/web`: the React app (Vite, TanStack Router, Tailwind, shadcn/ui on Base UI)
- `apps/api`: the API (Hono on Bun)
- `packages/schema`: Zod schemas and types shared by web and api
- `packages/core`: framework-free formation logic (no DOM, no React)
- `infra`: local Postgres now; deployment config later

## Workflow

- `main` is protected. Every change goes through a branch and a pull request.
- Branch names: `feat/…`, `fix/…`, `chore/…`, `docs/…`.
- PR titles follow [Conventional Commits](https://www.conventionalcommits.org) (`feat: add dancer labels`, `fix: snap to quarter cells`). Most PRs are squash-merged, so the title becomes the commit message on `main`. PRs with clean, meaningful commits may be rebase-merged instead, so write those commit messages in the same style.
- For anything bigger than a small fix, open an issue first so we can agree on the approach.

## Security and conduct

- Security problems: see [SECURITY.md](SECURITY.md). Please don't open a public issue.
- Everyone taking part follows the [Code of Conduct](CODE_OF_CONDUCT.md).
