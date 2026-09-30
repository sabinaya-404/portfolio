# Sabinaya's Portfolio

A personal portfolio showcasing systems and web development projects while learning through hands-on building and experimentation.

The goal is to honestly document projects I've built, technologies I'm learning, and things I break in the lab - no exaggeration, just real progress. (・_・;)

## Tech Stack (ง'̀-'́)ง

- **Framework:** React 19
- **Bundler:** Vite
- **Styling:** Vanilla CSS with custom properties
- **Icons:** react-icons


## Design System: Retro-Pop & Neo-Brutalism (⌐■_■)

I wanted something punchy and tactile instead of another sterile corporate template.

- **Colors:** High-contrast palette (Canary Yellow, Hot Pink, Mint, Cobalt Blue)
- **Borders & Shadows:** Thick 3px black borders with 6px hard offset drop shadows
- **Background:** Cream base with a subtle radial dot grid
- **Vibe:** Vibe is so important tho, no cap

## Projects Showcased

This portfolio features two honest projects I've built while learning:

### Portfolio Management System
A web application for managing demat accounts, holdings, companies, and IPO news.

**What it does:** Provides interfaces to manage multiple demat accounts, track stock holdings and company information, and monitor upcoming IPO opportunities through an admin panel.

**Technologies:** HTML, CSS, JavaScript, PHP, MySQL

**Source:** https://github.com/sabinaya-404/portfolio-management-system

### Linux System Dashboard
A C/Linux system monitoring dashboard providing real-time system statistics.

**What it does:** Displays live system information including CPU usage, memory, disk I/O, network statistics, and process information through both a terminal user interface and HTTP API.

**Technologies:** C, Linux, /proc, /sys, POSIX sockets, HTTP

**Source:** https://github.com/sabinaya-404/Linux_System_Dashboard

## Folder Structure (*・ω・)ﾉ
```text
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

```
## How to Run Locally ( ´ ▽ ` )b
```bash
# 1. Clone the repo
git clone https://github.com/sabinaya-404/portfolio.git

# 2. Install dependencies
npm install

# 3. Fire up the local dev server
npm run dev
```
## Current Status

- [x] React 19 + Vite setup
- [x] Neo-Brutalist design tokens & responsive layout
- [x] Modular component architecture (JSX + CSS per section)
- [x] Functional contact form with Formspree
- [x] Accessibility improvements (skip link, focus management, touch targets)
- [x] Accurate project showcases with honest descriptions
- [ ] System light/dark theme toggle with localStorage
    

## Philosophy ¯\_(ツ)_/¯

> "Document progress rather than manufacture experience."

Projects get listed when they are actually built. The learning section shifts as I pick up new concepts, and the lab documents experiments with Linux distros, Android custom ROMs, and reverse engineering.