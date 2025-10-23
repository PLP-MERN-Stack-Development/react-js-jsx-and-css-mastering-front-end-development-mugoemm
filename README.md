# Week 3 — React.js, JSX & Tailwind CSS

A responsive React application built with Vite and styled using Tailwind CSS.
This repository demonstrates component architecture, state management with hooks,
context for theme management, API integration (JSONPlaceholder), and persistence via a useLocalStorage custom hook.

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Page components (Home, Tasks, ApiList)
├── hooks/            # Custom React hooks (useLocalStorage)
├── contexts/         # React context providers (ThemeContext)
├── services/         # API integration functions
├── index.css         # Tailwind CSS imports
├── main.jsx          # React entry point
└── App.jsx           # Main application component
```

## 🚀 Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open browser at [http://localhost:5173](http://localhost:5173)

## 🎯 Features

* **Home Page**: Welcome card with brief info.
* **Task Manager**: Add, delete, complete, and filter tasks. Persist tasks via localStorage.
* **API List**: Fetch posts from JSONPlaceholder, supports pagination, search, loading & error states.
* **Theme Switcher**: Light/dark mode using Tailwind dark mode and localStorage.
* **Responsive Design**: Works on mobile, tablet, and desktop.
* **Reusable Components**: Buttons, Cards, Navbar, Footer, Layout.

## 📸 Screenshots

| Mobile                                 | Tablet                                 | Desktop                                  |
| -------------------------------------- | -------------------------------------- | ---------------------------------------- |
| ![mobile](docs/screenshots/mobile.png) | ![tablet](docs/screenshots/tablet.png) | ![desktop](docs/screenshots/desktop.png) |

> Replace these placeholders with actual screenshots of your app.

## 🌐 Deployment

* Deployed on Vercel: (https://react-js-jsx-and-css-mastering-front-end-development-atp0njno4.vercel.app)

### Deployment Steps

1. Push repository to GitHub.
2. Go to Vercel Dashboard → New Project → Import GitHub repository.
3. Set build command: `npm run build`, output directory: `dist`
4. Deploy and copy the production URL to this README.

## ✅ Checklist Before Submission

* [ ] App runs locally with `npm run dev`
* [ ] All pages functional (Home, Tasks, API)
* [ ] TaskManager CRUD works with filters
* [ ] API integration fetches posts with loading/error states
* [ ] Theme toggle works and persists
* [ ] Responsive on mobile/tablet/desktop
* [ ] Screenshots included in `docs/screenshots/`
* [ ] Deployed URL added
* [ ] Code is clean and organized according to React best practices

## 🛠️ Tech Stack

* React 18
* Vite 5
* Tailwind CSS 4
* React Router DOM 6
* JavaScript (ES6+)

---

This README is now fully submission-ready. Fill in the screenshots and deployed URL before pushing your repository to GitHub Classroom.
