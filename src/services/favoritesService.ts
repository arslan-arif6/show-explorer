import type { Show } from '../types/show'

const STORAGE_KEY = 'show-explorer:favorites'

export function getFavorites(): Show[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Show[]) : []
  } catch {
    return []
  }
}

function save(favorites: Show[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  } catch {
    throw new Error('Could not save favorites. Browser storage may be full or disabled.')
  }
}

export function addFavorite(show: Show): Show[] {
  const current = getFavorites()
  if (current.some((s) => s.id === show.id)) return current
  const next = [...current, show]
  save(next)
  return next
}

export function removeFavorite(id: number): Show[] {
  const next = getFavorites().filter((s) => s.id !== id)
  save(next)
  return next
}
