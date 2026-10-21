import { Link } from 'react-router-dom'
import ShowCard from '../../components/ShowCard'
import { useFavoritesViewModel } from './useFavoritesViewModel'
import '../home/HomeView.css'

export default function FavoritesView() {
  const { favorites, error, removeFavorite } = useFavoritesViewModel()

  return (
    <section>
      <h1 className="page-title">Your favorites</h1>
      {error && <p className="status status-error">{error}</p>}
      {favorites.length === 0 ? (
        <p className="status">
          No favorites yet. <Link to="/">Browse shows</Link> and tap the heart.
        </p>
      ) : (
        <div className="grid">
          {favorites.map((show) => (
            <ShowCard key={show.id} show={show} isFavorite onToggleFavorite={removeFavorite} />
          ))}
        </div>
      )}
    </section>
  )
}
