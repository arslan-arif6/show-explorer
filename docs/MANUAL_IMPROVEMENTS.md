# Manual improvements, corrections and refactoring after reviewing AI-generated code

Each item below was found while reviewing the first generated version and changed afterwards.

1. **Unsafe type cast in the API service.** The first version returned `[] as unknown as T` on a 404, which hides type errors. Refactored `request()` to take an explicit `notFoundValue: T` parameter so the return type is honest.
2. **Search box showed stale text.** The header input was a controlled state that was never synced with the URL, so after clicking Home the old search text stayed in the box. Changed it to read the current `q` URL parameter (`defaultValue` + `key`) and read the value from `FormData` on submit; this also removed an unnecessary `useState`.
3. **Old results visible during a new search.** While loading, the previous grid stayed on screen under the "Loading…" message. The grid now renders only when `loading` is false.
4. **Lint warning handled the wrong way, then fixed properly.** The build was clean, but the linter flagged `useFavorites` and the context object living in the same file as the provider component (breaks fast refresh). My first fix was removing a suppress comment, which just exposed the warning. The real fix was a refactor into three files: `favoritesContextObject.ts` (context), `FavoritesContext.tsx` (provider component) and `useFavorites.ts` (hook). Lint now reports 0 warnings.
5. **Verification gap.** The sandbox could not reach the live API, so I wrote a small mocked-fetch test of the model logic to confirm: exactly 20 unique shows, shows without posters filtered out, query trimmed, and queries under 2 characters rejected with a readable error.

Design decisions made instead of copying the mentor demo:
- TVMaze instead of OMDb: no API key to leak in a frontend bundle.
- localStorage instead of Firebase test-mode: Firebase test-mode rules are open to everyone and expire after 30 days, which is not safe to publish.
