# Show Explorer

A small React + TypeScript app for discovering TV shows and saving favorites. Built for the FlyRank AI Internship assignment "React app development with AI", using an AI assistant (Claude) as the development assistant.

## Features
- Random selection of 20 shows on every Home visit (clicking Home again reloads a new selection)
- Search by title (minimum 2 characters, validated)
- Favorites page, persisted in the browser (localStorage)
- Loading, empty and error states

## Tech
Vite, React 19, TypeScript, React Router. Data from the free [TVMaze API](https://www.tvmaze.com/api) (no API key required).

## Architecture (MVVM per screen)
```
src/
  components/      Header, ShowCard (presentational)
  context/         Favorites context, provider and hook
  pages/home/      homeModel (logic) · useHomeViewModel (state) · HomeView (UI)
  pages/favorites/ favoritesModel · useFavoritesViewModel · FavoritesView
  services/        tvmazeService (API), favoritesService (storage)
  types/           shared Show types
```

## Run locally
```
npm install
npm run dev
```

## Documentation for the assignment
- `docs/PROMPTS.md` – prompts used during development
- `docs/AI_ASSISTANCE.md` – how AI assisted
- `docs/MANUAL_IMPROVEMENTS.md` – corrections made after reviewing AI output
