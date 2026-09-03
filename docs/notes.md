# Development Notes & Scratchpad

A place to log quick ideas, bugs smashed, and lessons learned during development. Damn, this made me learn so much, still feeling naive.

## Bugs Smashed & Lessons Learned

- **Missing Imports After Splitting Components**:
  - *Problem:* When extracting `Contact.jsx`, the page went completely blank (`ReferenceError: FaGithub is not defined`).
  - *Lesson:* Whenever moving JSX that uses external libraries or icons into a new file, remember to move the `import` statements directly into that component.
- **CSS Specificity & Dead Rules**:
  - *Problem:* `index.css` grew to 650+ lines with duplicate `.about-tags` and conflicting overrides.LOl, my laptop froze for 2 mins.
  - *Lesson:* Grouping CSS into modular files per component (`Hero.css`, `Navbar.css`, etc.) makes debugging layout issues 69x faster.
- **Mobile Flexbox vs. Grid**:
  - *Problem:* Tags and contact links looked cramped on mobile screens.
  - *Lesson:* Use `flex-wrap: wrap` for tag pills and 1-column `grid-template-columns: 1fr`(fr bro no cap), breakpoints on smaller viewports.

## Important thing I learned :-O
I should make separate folders and files for each modules, so that I can play with those modules independently, without affecting other. 
## Tried to implement dark mode
braaah it failed miserably, it just inverted color, Guess, I will implement that later, m having a headach, gonna make me some tea. brah.
Stalling Dark mode for now, will comment out now, 
## Smooth Scrolling working
Brah, implemented smooth scrolling and was not working, changed every CSS variable, still nope, then after intense research(google), turns out, Windows animation was off. LMAO classic Windows moment! (╯°□°)╯︵ ┻━┻
## Future Lab & Project Ideas :D

- [ ] Write up a mini-post on Android APK decompilation tools (`jadx-gui`, `apktool`).
- [ ] Document my Linux distro-hopping setup and dotfiles configuration.
- [ ] Add an interactive live terminal or mini-widget to the Lab section.
- [ ] Connect the dark mode toggle using React `useState` and `localStorage` to save user preference.


##  Useful Resources ^_____^
- [React 19 Docs](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [React Icons Library](https://react-icons.github.io/react-icons/)