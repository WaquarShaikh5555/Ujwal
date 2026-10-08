# 📚 NoteVerse — Smart Revision Hub

A professional, animated revision website for students. Flip through **3D flashcards**, browse **condensed notes**, and track your mastery — across **8 subjects** with **80 flashcards** and **25 note topics**.

![NoteVerse](https://img.shields.io/badge/made%20with-vanilla%20JS%2FCSS-blueviolet) ![status](https://img.shields.io/badge/status-production--ready-success)

## ✨ Features

- 🃏 **3D Flashcard Studio** — buttery-smooth card flips, swipe/keyboard navigation (`←` `→` `Space` `K`), shuffle, reset, and a completion celebration
- 📊 **Progress Tracking** — mark cards as known; mastery is saved automatically (localStorage) and shown as animated bars on every subject card
- 📒 **Quick Notes** — exam-ready topic summaries in a smooth accordion, filterable by subject
- 🎨 **Motion Design** — animated aurora background, parallax floating symbols, cursor glow, scroll-reveal staggering, animated counters, typewriter hero, marquee, and 3D tilt cards
- 🌓 **Dark & Light themes** — persisted across visits
- 📱 **Fully responsive** — flawless from phones to desktops
- ♿ **Accessible & considerate** — keyboard controls, ARIA labels, `prefers-reduced-motion` support

## 🚀 Run it locally

No build step, no dependencies — it's pure HTML/CSS/JS:

```bash
# any static server works, e.g.:
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in your browser.

## 🗂 Project structure

```
├── index.html            # App shell & all sections
├── assets/
│   ├── css/style.css     # Design tokens, themes, animations, components
│   └── js/
│       ├── data.js       # Subjects, flashcard decks & notes content
│       └── app.js        # All interactivity & motion
```

## 🧠 Subjects included

Mathematics · Physics · Chemistry · Biology · English · History · Geography · Computer Science

## 📄 License

MIT — study hard, flip daily. 💜
