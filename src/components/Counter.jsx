import { useState, useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import toast from "react-hot-toast"

function Counter({ item }) {
    const [count, setCount] = useState(0);
    const { addToCart } = useContext(CartContext)

    const handleAdd = () => setCount(prev => prev + 1)
    const handleSub = () => setCount(prev => (prev > 0 ? prev - 1 : 0))

    const handleAddToCart = () => {
        if (count > 0) {
            addToCart({ ...item, count })
            toast.success(`${item.name} Agregado al carrito 🛒`)
            setCount(0)
        } else {
            toast.error("Tenés que Agregar al menos 1 unidad")
        }
    }

    return (
        <div className="d-flex align-items-center gap-2 mt-3">
            <Button
                onClick={handleSub}
                variant="success"
                disabled={count === 0}
            >
                -
            </Button>

            <span className="fw-bold">{count}</span>

            <Button
                onClick={handleAdd}
                variant="warning"
            >
                +
            </Button>

            <Button
                onClick={handleAddToCart}
                variant="primary"
            >
                Agregar al Carrito
            </Button>
        </div>
    );
}

export default Counter