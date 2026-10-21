import { addFavorite, getFavorites, removeFavorite } from '../../services/favoritesService'
import type { Show } from '../../types/show'

export function loadFavorites(): Show[] {
  return getFavorites()
}

export function saveFavorite(show: Show): Show[] {
  return addFavorite(show)
}

export function deleteFavorite(id: number): Show[] {
  return removeFavorite(id)
}
