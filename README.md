# Saravanan S Portfolio

Frontend React Developer portfolio built with React. It highlights work experience,
technical skills, personal projects, and contact details.

Live portfolio:
https://saravananshankar98.github.io/portfolio

## Features

- Responsive portfolio UI for mobile, tablet, and desktop
- Hero section with typewriter role animation
- Separated data file for easy content updates
- Reusable React components for sections, tags, navigation, and cards
- Work experience grouped by company with expandable project details
- Personal projects and learning timeline
- Production build support for GitHub Pages

## Project Structure

```text
portfolio/
  public/
    index.html
    profile.jpg
  src/
    components/
      About.jsx
      Experience.jsx
      Footer.jsx
      Hero.jsx
      Nav.jsx
      Projects.jsx
      SectionHeader.jsx
      Skills.jsx
      Tag.jsx
    data/
      portfolioData.js
    hooks/
      useInView.js
      useTypewriter.js
    App.jsx
    index.js
    styles.css
  package.json
```

## Run Locally

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy

```bash
npm run deploy
```

The `homepage` field in `package.json` is configured for GitHub Pages at
`/portfolio`.
