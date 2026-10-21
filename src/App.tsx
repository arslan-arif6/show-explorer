import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { FavoritesProvider } from './context/FavoritesContext'
import FavoritesView from './pages/favorites/FavoritesView'
import HomeView from './pages/home/HomeView'

export default function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/favorites" element={<FavoritesView />} />
          </Routes>
        </main>
      </FavoritesProvider>
    </BrowserRouter>
  )
}
