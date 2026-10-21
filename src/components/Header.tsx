import { type FormEvent } from 'react'
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const currentQuery = searchParams.get('q') ?? ''

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const data = new FormData(event.currentTarget as HTMLFormElement)
    const trimmed = String(data.get('q') ?? '').trim()
    navigate(trimmed ? `/?q=${encodeURIComponent(trimmed)}` : '/')
  }

  return (
    <header className="header">
      <Link to="/" className="brand">Show<span>Explorer</span></Link>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <form className="search" onSubmit={handleSubmit} role="search">
        <input
          key={currentQuery}
          name="q"
          type="search"
          placeholder="Search TV shows…"
          defaultValue={currentQuery}
          aria-label="Search shows"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  )
}
