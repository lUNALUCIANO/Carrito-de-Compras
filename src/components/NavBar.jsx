import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink, Link } from 'react-router'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



function NavBar({ categories }) {


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
                                    to={`/category/${category}`}
                                    key={category}>
                                    {category}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>

                    </Nav>

                    <Form className="d-flex me-5">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>


                </Navbar.Collapse>

                <CartWidget />

            </Container>

        </Navbar>
    )
}

export default NavBar