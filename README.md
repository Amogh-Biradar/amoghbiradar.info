# amoghbiradar.info

Source code for [amoghbiradar.info](https://amoghbiradar.info), the portfolio of Amogh Biradar.

The site is a dependency-free static portfolio built with HTML, CSS, and JavaScript. It includes:

- a responsive landing page;
- nine engineering project case studies;
- a dedicated STEM Champions Initiative page;
- an experience and technical-focus page;
- direct repository, demo, and video links where supporting material is available.

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Structure

- `index.html` — landing page
- `projects.html` — project index
- `project.html` — reusable project case-study view
- `script.js` — project data and rendering
- `stem-champions.html` — nonprofit profile
- `about.html` — experience and technical focus
- `style.css` — responsive design system
- `assets/` — production image assets

## Deployment

The production site is served from cPanel. Upload the files at the repository root to `public_html` while preserving the `assets/` directory.
