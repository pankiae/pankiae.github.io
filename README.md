# Portfolio Site

A personal portfolio built with **Next.js**, **JavaScript**, and **Tailwind CSS**. It showcases my projects, experience, and contact information.

## Features
- Dark‑mode premium design with glassmorphism
- Sections: Hero, Projects, Experience, About, Contact
- Static export ready for GitHub Pages
- CI/CD with GitHub Actions

## Deployment (GitHub Pages)
1. Push this repository to GitHub (recommended repo name: `pankiae.github.io`).
2. Ensure the repository is **public** (required for free GitHub Pages).
3. The workflow `.github/workflows/deploy.yml` will build the site and publish the `out` folder to the `gh-pages` branch.
4. Enable Pages in **Settings → Pages** and select **GitHub Actions** as the source.

## Development
```bash
npm install
npm run dev   # http://localhost:3000
```

## License
MIT
