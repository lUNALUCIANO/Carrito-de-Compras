
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router'

function CartWidget() {
  const { obtenerCant} = useContext( CartContext)
  const cantidades = obtenerCant()
  const navigate = useNavigate()
  return (
    <Button variant="primary" onClick={() => navigate("/cart")}>🛒 <Badge bg="secondary">{cantidades}</Badge>
    </Button>
  );
}


export default CartWidget



