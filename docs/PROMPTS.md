# Prompts used during development

AI assistant: Claude (Anthropic) in chat. Prompts are listed in order. Each step asked for one small thing only and said what NOT to build yet, following the approach from the mentor session.

## 0. Starting prompt (written by the developer)
> let's complete this assignment  (attached: screenshot of the assignment page)
> here is transcript … (attached: transcript of the mentor session)
> i don't want to understand any of that i just want to complete assignment so i can get my certificate … if you need my input explain me exactly what i do for you

## 1. Project setup
> Initialize a new React application using Vite and TypeScript. Use functional components only. Do not install any UI library. Install react-router-dom. Do not add any show functionality yet.

## 2. Clean the template
> Remove all default Vite content, images, styles and demo code. Leave a minimal working application. Do not create extra components yet.

## 3. Shared types
> Create shared TypeScript types: a `Show` type used by the UI and a `TvMazeShow` type matching the API response. Types only, no logic.

## 4. API service
> Create `services/tvmazeService.ts` using the free TVMaze API (no key). Export async `searchShows(query)` and `fetchShowsPage(page)`. Map API data to the `Show` type. Throw readable errors on network or HTTP failure. No React hooks, no state.

## 5. Favorites service
> Create `services/favoritesService.ts` with `getFavorites`, `addFavorite`, `removeFavorite` using localStorage. Handle corrupted data and storage errors. No React hooks, no UI.

## 6. Home model (business logic only)
> Implement `pages/home/homeModel.ts`: `getShows(query)` trims the query, requires at least 2 characters, calls the service. `getInitialShows()` fetches two random pages in parallel with Promise.all, removes duplicates, drops shows without posters, shuffles and returns exactly 20. No hooks, no direct fetch.

## 7. Home view model
> Implement `useHomeViewModel` hook: state for shows, loading, error; read the search query from the URL; load random shows when there is no query; ignore outdated responses; reload when the user clicks Home. No JSX, no direct fetch.

## 8. Reusable card + home view
> Create a presentational `ShowCard` component (poster, title, year, type, rating, favorite button) with props only. Implement `HomeView` using the view model and `ShowCard`: loading message, error message, empty state, grid of cards.

## 9. Header
> Create a reusable Header with Home and Favorites links, a search input and a search button. Search navigates to `/?q=...`.

## 10. Favorites feature
> Create the favorites model, a favorites context/provider, `useFavoritesViewModel` and `FavoritesView`. The favorite button toggles on both Home and Favorites. Show an empty state with a link back to Home.

## 11. Styling
> Apply a clean dark theme with CSS variables, responsive grid, hover states and visible focus styles. No UI library.

## 12. Review prompts
> Run the type-check build and the linter and fix every error and warning.
> Review all generated code for bugs, hacks and UX problems and fix them. (see MANUAL_IMPROVEMENTS.md)
