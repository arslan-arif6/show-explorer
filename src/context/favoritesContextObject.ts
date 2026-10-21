import { createContext } from 'react'
import type { Show } from '../types/show'

export interface FavoritesContextValue {
  favorites: Show[]
  error: string | null
  isFavorite: (id: number) => boolean
  toggleFavorite: (show: Show) => void
}

export const FavoritesContext = createContext<FavoritesContextValue | null>(null)
