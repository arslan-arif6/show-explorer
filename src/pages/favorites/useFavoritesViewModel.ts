import { useFavorites } from '../../context/useFavorites'

export function useFavoritesViewModel() {
  const { favorites, error, toggleFavorite } = useFavorites()
  return { favorites, error, removeFavorite: toggleFavorite }
}
