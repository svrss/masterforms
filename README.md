# masterforms

masterforms is a free, open-source 3D formation editor for dance teams. Lay out dancers on a stage, build a sequence of formations slide by slide, and share it with a link: anyone with the link can view and edit, and accounts are optional. It is desktop-first, lightweight enough to run on any laptop, with a privacy-first approach (no analytics, no tracking).

## Quickstart

You need [Git](https://git-scm.com), [Docker](https://docs.docker.com/get-docker/) and [mise](https://mise.jdx.dev).

```sh
git clone https://github.com/svrss/masterforms.git && cd masterforms
mise trust && mise install   # Bun, gitleaks and Lefthook at pinned versions
mise run setup               # dependencies, git hooks, .env
mise run dev                 # Postgres + API + web on http://localhost:5173
```

See [CONTRIBUTING.md](CONTRIBUTING.md) to get involved.

## License

[MIT](LICENSE)
