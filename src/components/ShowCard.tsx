import type { Show } from '../types/show'
import './ShowCard.css'

interface ShowCardProps {
  show: Show
  isFavorite: boolean
  onToggleFavorite: (show: Show) => void
}

export default function ShowCard({ show, isFavorite, onToggleFavorite }: ShowCardProps) {
  return (
    <article className="card">
      {show.poster ? (
        <img className="card-poster" src={show.poster} alt={`${show.name} poster`} loading="lazy" />
      ) : (
        <div className="card-poster card-noposter">No poster</div>
      )}
      <div className="card-body">
        <h3 className="card-title">{show.name}</h3>
        <p className="card-meta">
          {show.year} · {show.type}
          {show.rating !== null && <span className="card-rating"> ★ {show.rating}</span>}
        </p>
        <button
          type="button"
          className={`fav-btn ${isFavorite ? 'is-fav' : ''}`}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(show)}
        >
          {isFavorite ? '♥ Saved' : '♡ Favorite'}
        </button>
      </div>
    </article>
  )
}
