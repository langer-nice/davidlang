# One-page responsive site (EN / FR)

Simple one-page site with an English/French language switch.

Quick start

1. Install dependencies (optional, to build SCSS):

```bash
npm install
```

2. Build SCSS to CSS (if you change `.scss`):

```bash
npm run build:sass
```

3. Open `index.html` in your browser.

Notes

- The GitHub link in the header points to https://github.com/langer-nice/davidlang.
- To push this project to that repository, add the remote and push (see below).

Push instructions (optional):

```bash
git init
git add .
git commit -m "Initial project scaffold"
git branch -M main
git remote add origin git@github.com:langer-nice/davidlang.git
# then push when ready:
# git push -u origin main
```
- SCSS source is in `scss/styles.scss`. A compiled `css/styles.css` is included for convenience.
