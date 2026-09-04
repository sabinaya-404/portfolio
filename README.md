# Sabinaya's Portfolio ( `.` )

A personal portfolio built with React, Vite, and plain CSS while learning web development and figuring out how things work under the hood.

The goal is not to pretend I have 10 years of senior enterprise experience.Actually I have zero. It is just an honest space to document stuff I am building, technologies I am learning, and things I accidentally break in the lab. (・_・;)

## Tech Stack (ง'̀-'́)ง

- **Core:** React 19, JavaScript (ESNext)
- **Bundler:** Vite
- **Styling:** Vanilla CSS with custom properties (no Tailwind, pure CSS grind)
- **Icons:** `react-icons`
- **Version Control:** Git & GitHub


## Design System: Retro-Pop & Neo-Brutalism (⌐■_■)

I wanted something punchy and tactile instead of another sterile corporate template.

- **Colors:** High-contrast palette (Canary Yellow, Hot Pink, Mint, Cobalt Blue)
- **Borders & Shadows:** Thick 3px black borders with 6px hard offset drop shadows
- **Background:** Cream base with a subtle radial dot grid
- **Vibe:** Vibe is so important tho, no cap

## Folder Structure (*・ω・)ﾉ

portfolio/
├── docs/
│   ├── decisions.md       # ADRs (Why Neo-Brutalism, why plain CSS)
│   └── notes.md           # Scratchpad, bugs smashed, and lessons learned
├── public/
│   └── favicon.svg        # Custom tab icon
├── src/
│   ├── components/        # Isolated component modules + paired stylesheets
│   │   ├── Navbar.jsx   / Navbar.css
│   │   ├── Hero.jsx     / Hero.css
│   │   ├── About.jsx    / About.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── Learning.jsx / Learning.css
│   │   ├── Lab.jsx      / Lab.css
│   │   ├── Contact.jsx  / Contact.css
│   │   └── Footer.jsx   / Footer.css
│   ├── App.jsx            # Main view coordinator
│   ├── index.css          # Design tokens & global resets
│   └── main.jsx           # Application entry point
├── index.html
├── package.json
└── README.md

## How to Run Locally ( ´ ▽ ` )b

# 1. Clone the repo
git clone https://github.com/sabinaya-404/portfolio.git

# 2. Install dependencies
npm install

# 3. Fire up the local dev server
npm run dev

## Current Status & Roadmap ( ◡‿◡ )

- [x] React 19 + Vite setup
- [x] Neo-Brutalist design tokens & responsive grid
- [x] Modular component architecture (one JSX + one CSS per section)
- [x] Real working links for GitHub, Email, and Instagram
- [x] Documented architectural decisions & dev notes
- [x] Mobile navigation drawer improvements
- [ ] System light/dark theme toggle with localStorage
- [ ] Live deployment
    

## Philosophy ¯\_(ツ)_/¯

> "Document progress rather than manufacture experience."

Projects get listed when they are actually built. The learning section shifts as I pick up new concepts, and the lab documents experiments with Linux distros, Android custom ROMs, and reverse engineering.