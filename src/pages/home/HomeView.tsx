import ShowCard from '../../components/ShowCard'
import { useFavorites } from '../../context/useFavorites'
import { useHomeViewModel } from './useHomeViewModel'
import './HomeView.css'

export default function HomeView() {
  const { query, shows, loading, error } = useHomeViewModel()
  const { isFavorite, toggleFavorite } = useFavorites()

  return (
    <section>
      <h1 className="page-title">{query ? `Results for “${query}”` : 'Discover shows'}</h1>
      {loading && <p className="status">Loading…</p>}
      {error && <p className="status status-error">{error}</p>}
      {!loading && !error && shows.length === 0 && (
        <p className="status">No shows found. Try a different search.</p>
      )}
      <div className="grid">
        {!loading && shows.map((show) => (
          <ShowCard
            key={show.id}
            show={show}
            isFavorite={isFavorite(show.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </section>
  )
}
