import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import styles from '../styles/CartContainer.module.css'

function CartContainer() {
    const { cart, getTotal, deleteItem } = useContext(CartContext)
    const total = getTotal()
    const navigate = useNavigate()

    useEffect(() => {
        if (cart.length === 0) {
            toast("Tu carrito está vacío 👏", {
                id: "carrito-vacio",
                icon: '🛒',
                duration: 2000
            })
        }
    }, [cart])

    if (cart.length === 0) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <h3>Tu carrito está vacío</h3>
                <small>(Agregá productos para continuar)</small>
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
                                Cancelar Compra
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>



            <h2 className={styles.total}>💰 Total: ${total}</h2>

            <Button
                className={styles.checkoutBtn}
                variant="dark"
                onClick={() => navigate('/Checkout')}
            >
                Finalizar Compra
            </Button>
        </div>
    )
}
export default CartContainer