import type { Show, TvMazeShow } from '../types/show'

const API_URL = 'https://api.tvmaze.com'

function toShow(raw: TvMazeShow): Show {
  return {
    id: raw.id,
    name: raw.name,
    year: raw.premiered ? raw.premiered.slice(0, 4) : 'N/A',
    type: raw.type,
    poster: raw.image?.medium ?? null,
    rating: raw.rating?.average ?? null,
    genres: raw.genres ?? [],
  }
}

async function request<T>(path: string, notFoundValue: T): Promise<T> {
  let response: Response
  try {
    response = await fetch(`${API_URL}${path}`)
  } catch {
    throw new Error('Network error. Please check your connection and try again.')
  }
  if (response.status === 404) return notFoundValue
  if (!response.ok) {
    throw new Error(`The show service returned an error (${response.status}).`)
  }
  return response.json() as Promise<T>
}

export async function searchShows(query: string): Promise<Show[]> {
  const results = await request<{ show: TvMazeShow }[]>(
    `/search/shows?q=${encodeURIComponent(query)}`,
    [],
  )
  return results.map((r) => toShow(r.show))
}

export async function fetchShowsPage(page: number): Promise<Show[]> {
  const results = await request<TvMazeShow[]>(`/shows?page=${page}`, [])
  return results.map(toShow)
}
