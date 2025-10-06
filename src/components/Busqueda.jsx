
function Busqueda({ productos, termino }) {
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
