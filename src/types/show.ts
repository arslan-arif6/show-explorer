export interface Show {
  id: number
  name: string
  year: string
  type: string
  poster: string | null
  rating: number | null
  genres: string[]
}

export interface TvMazeShow {
  id: number
  name: string
  type: string
  premiered: string | null
  genres: string[]
  rating: { average: number | null }
  image: { medium: string; original: string } | null
}
