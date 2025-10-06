import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getCategory, getItems } from '../firebase/db'
import NavBar from './NavBar'

function NavBarContainer() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    getCategory().then(data => setCategories(data))
    getItems().then(data => setProducts(data))
  }, [])

  const resultados = products.filter(prod =>
    prod.name.toLowerCase().includes(busqueda.toLowerCase()) ||
    prod.category.toLowerCase().includes(busqueda.toLowerCase())
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (busqueda.trim()) {
      navigate(`/search/${busqueda.trim()}`)
      setBusqueda("")
    }
  }

  const handleResultClick = (id) => {
    navigate(`/detalle/${id}`)
    setBusqueda("")
  }

  return (
    <NavBar
      categories={categories}
      busqueda={busqueda}
      setBusqueda={setBusqueda}
      resultados={resultados}
      handleSubmit={handleSubmit}
      handleResultClick={handleResultClick}
    />
  )
}

export default NavBarContainer
