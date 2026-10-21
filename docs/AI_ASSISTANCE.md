# How AI assisted

I used Claude as the development assistant. I directed the work with small, single-purpose prompts (see `PROMPTS.md`), each one saying what to build and what not to build yet.

| Stage | How AI helped |
|---|---|
| Planning | Read the assignment and the mentor session transcript, picked a scope that matches it (React + TypeScript, API search, favorites, MVVM structure) and replaced the parts that needed accounts/keys (OMDb key, Firebase) with simpler equivalents (TVMaze API, localStorage). |
| Scaffolding | Created the Vite + React + TypeScript project and removed the template code. |
| Architecture | Generated the MVVM structure per screen: model (logic), view model (hook with state), view (UI). |
| Implementation | Wrote the API and storage services, the home and favorites logic, the Header, ShowCard and views. |
| Styling | Generated the responsive dark theme in plain CSS. |
| Verification | Ran the TypeScript build and linter, and tested the model logic against mocked API responses (20 unique shows, search filtering, 2-character validation). |
| Review | Re-read its own output for bugs and weak spots and fixed them (see `MANUAL_IMPROVEMENTS.md`). |

Limitations: the AI sandbox could not reach the live TVMaze API, so API calls were tested with mocked responses; the live API should be checked in the browser after deployment.
