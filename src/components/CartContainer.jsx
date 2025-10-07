import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import styles from '../styles/CartContainer.module.css'

function CartContainer() {
    const { cart, getTotal, deleteItem, clearCart } = useContext(CartContext)
    const total = getTotal()
    const navigate = useNavigate()

    useEffect(() => {
        if (cart.length === 0) {
            toast("Tu carrito está vacío 👏", {
                id: "carrito-vacio",
                icon: '🛒',
                duration: 4000
            })
        }
    }, [cart])

    if (cart.length === 0) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <h3>Tu carrito está Vacío</h3>
                <small>(Agregá Productos para continuar)</small>
                <Button
                    className="mt-3"
                    onClick={() => navigate('/')}
                >
                    Ir a Comprar
                </Button>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>🛒 Detalle de tu Compra !!</h2>

            <ListGroup className="w-50">
                {cart.map(item => (
                    <ListGroup.Item key={item.id} className={styles.listItem}>
                        <div>
                            <strong>{item.name}</strong> x {item.count}und
                            <div className={styles.itemPrice}>
                                ${item.price} c/u
                            </div>
                        </div>
                        <div className={styles.itemActions}>
                            <strong>${item.count * item.price}</strong>
                            <Button
                                className={styles.deleteButton}
                                onClick={() => deleteItem(item.id)}
                            >
                                Eliminar Producto
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <h2 className={styles.total}>💰 Total: ${total}</h2>

            <div className="d-flex justify-content-center gap-2 mt-3">
                <Button
                    variant="dark"
                    onClick={() => navigate('/Checkout')}>
                    Finalizar Compra
                </Button>

                <Button
                    onClick={clearCart}
                    variant="primary">
                    Cancelar Compra
                </Button>
                <Button
                    onClick={() => navigate('/')}
                    variant="success">
                    Agregrar Mas Productos
                </Button>
            </div>


        </div>
    )
}
export default CartContainer