import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ListGroup from 'react-bootstrap/ListGroup'
import  Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'

function CartContainer() {
    const { cart , getTotal } = useContext(CartContext)
    const total = getTotal()
    const navigate = useNavigate()

    if (cart.length === 0){
        return(
            <div>No tenes ningun Producto Cargado</div>
        )
    }

    return (
        <div className='d-flex  flex-column  mt-5 align-items-center justify-content-center '>
            <ListGroup className='w-50'>
                {cart.map(item =>(
                   <ListGroup.Item key={item.id}>
                    {item.name} x {item.count} $ {item.price} {item.descrption}
                   </ListGroup.Item>  
                ))}
           
            </ListGroup>
            <h2 className=' mt-3'> Total $:{total}</h2>
            <Button 
            className='w-50 mt-5'
            onClick={() => navigate('/Checkout')}
            >Checkout</Button>
        </div>
    )
}
export default CartContainer