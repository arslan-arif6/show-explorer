import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import type { Show } from '../../types/show'
import { getInitialShows, getShows } from './homeModel'

export function useHomeViewModel() {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const query = searchParams.get('q') ?? ''
  const [shows, setShows] = useState<Show[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // location.key changes on every navigation, so clicking "Home" reloads random shows.
  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const result = query ? await getShows(query) : await getInitialShows()
        if (!cancelled) setShows(result)
      } catch (err) {
        if (!cancelled) {
          setShows([])
          setError(err instanceof Error ? err.message : 'Something went wrong.')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [query, location.key])

  return { query, shows, loading, error }
}
