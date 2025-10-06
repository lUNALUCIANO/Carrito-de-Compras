import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink, Link, useNavigate } from 'react-router'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import {useState} from 'react'
import styles from "../styles/NavBar.module.css"

function NavBar({ categories, products}) {
  const [busqueda, setBusqueda] = useState("")
  const navigate = useNavigate()

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


  return (
    <Navbar expand="lg" className="bg-secondary" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand as={Link} to="/">MoonDistribuidora</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categories.map(category => (
                <NavDropdown.Item
                  as={NavLink}
                  to={`/category/${category.categoryName}`}
                  key={category.id}>
                  {category.categoryName}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

          </Nav>

          <Form className={`d-flex me-5 ${styles.navbarSearch}`} onSubmit={handleSubmit} >
            <Form.Control
              type="search"
              placeholder="Buscar Producto"
              className="me-2"
              aria-label="Search"
              value={busqueda}

              onChange={(e) => setBusqueda(e.target.value)}
            />
            <Button variant="outline-success" >Buscar</Button>
            {busqueda && (
              <ListGroup className={styles.searchDropdown}>
                {resultados.length > 0 ? (
                  resultados.slice(0, 5).map(prod => (
                    <ListGroup.Item
                      key={prod.id}
                      className={styles.searchDropdownItem}
                      action
                      onClick={() => {
                        navigate(`/detalle/${prod.id}`)
                        setBusqueda("")
                      }}
                    >
                      {prod.name}
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item>No se encontraron resultados</ListGroup.Item>
                )}
              </ListGroup>
            )}

          </Form>


        </Navbar.Collapse>

        <CartWidget />

      </Container>

    </Navbar>
  )
}

export default NavBar