import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'
import { useNavigate } from 'react-router-dom'

function Checkout() {
    const navigate = useNavigate()
    const { getTotal, cart, clearCart } = useContext(CartContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const nombre = form.nombre.value
        const telefono = form.telefono.value

        const order = {
            buyer: { email, nombre, telefono },
            total: getTotal(),
            items: cart,
            date: serverTimestamp()

        }

        const ok = await createOrder(order)

        if (ok) {
            navigate('/')
            clearCart()
        }

    }





    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form className='w-50' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su mail" required name='email' />
                    <Form.Text className="text-muted">
                        Nunca compartiremos tu correo electrónico con nadie más.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" required name='nombre' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Telefono " required name={'telefono'} />
                </Form.Group>


                <Button variant="dark" type="submit">
                    Finalizar Compra
                </Button>
            </Form>
        </div>

    )


}
export default Checkout