# Iniyan S K Portfolio

A professional single-page portfolio for **Iniyan S K** (AIML Engineer & Full Stack Developer) featuring a space-themed neon gradient design, animated hero, typewriter text, parallax background, skill bars, project cards, and responsive layout.

## Tech Stack

- Vite + React
- Framer Motion (micro animations)
- Custom Canvas for stars + comets background

## Features

- Dynamic dark/light mode with rocket/planet toggle
- Neon blue → purple gradient theme
- Animated hero (floating astronaut + planet ring)
- Typewriter rotating phrases
- Parallax star field & subtle comets
- Projects grid with slide-in animations
- Skills section with animated gradient bars
- Certificates + Contact sections
- Responsive design & accessible semantic markup

## Development

```powershell
cd w:\portfolio
npm install
npm run dev
```

Local dev at: http://localhost:5173

## Build

```powershell
npm run build
```

Output in `dist/`.

## Deploy to Netlify

1. Create a new site from existing repo or drag & drop build folder.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Ensure `netlify.toml` is present for SPA redirects.

## Customization

- Update hero text in `src/sections/Hero.jsx`.
- Place your resume at `public/resume.pdf` (served at `/resume.pdf`). The Download button links directly to this file.
- Modify skills array in `src/sections/Skills.jsx`.
- Add project `link` values in `src/sections/Projects.jsx`.

## Domain

You can configure a custom `.com` domain in Netlify domain settings after deployment (purchase via registrar, add DNS records).

## TODO Ideas

- Add blog section (Markdown + static rendering)
- Integrate contact form (Netlify forms)
- Add project detail modals

## License

Personal portfolio – all rights reserved.
