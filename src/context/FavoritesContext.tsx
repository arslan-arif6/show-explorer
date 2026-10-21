import { useState, type ReactNode } from 'react'
import {
  deleteFavorite,
  loadFavorites,
  saveFavorite,
} from '../pages/favorites/favoritesModel'
import type { Show } from '../types/show'
import { FavoritesContext } from './favoritesContextObject'

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Show[]>(() => loadFavorites())
  const [error, setError] = useState<string | null>(null)

  function isFavorite(id: number) {
    return favorites.some((s) => s.id === id)
  }

  function toggleFavorite(show: Show) {
    try {
      setError(null)
      setFavorites(isFavorite(show.id) ? deleteFavorite(show.id) : saveFavorite(show))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not update favorites.')
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, error, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}
