import { fetchShowsPage, searchShows } from '../../services/tvmazeService'
import type { Show } from '../../types/show'

const MIN_QUERY_LENGTH = 2
const INITIAL_COUNT = 20
const MAX_PAGE = 60

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function uniqueById(shows: Show[]): Show[] {
  return Array.from(new Map(shows.map((s) => [s.id, s])).values())
}

export async function getShows(query: string): Promise<Show[]> {
  const cleaned = query.trim()
  if (cleaned.length < MIN_QUERY_LENGTH) {
    throw new Error(`Search query must contain at least ${MIN_QUERY_LENGTH} characters.`)
  }
  const results = await searchShows(cleaned)
  return results.filter((s) => s.poster !== null)
}

export async function getInitialShows(): Promise<Show[]> {
  const pages = shuffle(Array.from({ length: MAX_PAGE }, (_, i) => i)).slice(0, 2)
  const results = await Promise.all(pages.map((p) => fetchShowsPage(p)))
  const merged = uniqueById(results.flat()).filter((s) => s.poster !== null)
  return shuffle(merged).slice(0, INITIAL_COUNT)
}
