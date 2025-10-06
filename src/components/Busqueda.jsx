
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getItems } from "../firebase/db"

function Busqueda() {
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

  return (
    <div className="container mt-4">
      <h2>Resultados para "{termino}"</h2>
      <div className="row">
        {productos.length > 0 ? (
          productos.map(p => (
            <div className="col-md-3 mb-3" key={p.id}>
              <div className="card h-100">
                <img src={p.image} className="card-img-top" alt={p.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{p.name}</h5>
                  <p>${p.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>
    </div>
  )
}

export default Busqueda
