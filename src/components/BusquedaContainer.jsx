import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getItems } from "../firebase/db"
import Busqueda from "./Busqueda"

function BusquedaContainer() {
  const { termino } = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getItems().then(data => {
      const filtrados = data.filter(p =>
        p.name.toLowerCase().includes(termino.toLowerCase()) ||
        p.category.toLowerCase().includes(termino.toLowerCase())
      )
      setProductos(filtrados)
    })
  }, [termino])

  return <Busqueda productos={productos} termino={termino} />
}

export default BusquedaContainer
