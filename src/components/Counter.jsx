import { useState, useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"

function Counter({ item ,}) {
    const [count, setCount] = useState(0);
    const { addToCart, cart } = useContext(CartContext)
    const navigate = useNavigate()

    const handleAdd = () => setCount(prev => prev + 1)
    const handleSub = () => setCount(prev => (prev > 0 ? prev - 1 : 0))

    const handleAddToCart = () => {
        if (count == 0) {
             toast.error("Tenés que Agregar al menos 1 unidad")
        }
          else if (cart.some(prod => prod.id === item.id)) {
        toast.error("Ya tenes tu Producto Cargado")
        }
        else{
            addToCart({ ...item, count })
            toast.success(`${item.name} Agregado al carrito 🛒`)
            setCount(0)
        } 
    }

    return (
        <div className="d-flex align-items-center gap-2 mt-3">
            <Button
                onClick={handleSub}
                variant="success"
                size="sm"
                disabled={count === 0}>
                -
            </Button>

            <span className="fw-bold">{count}</span>

            <Button
                onClick={handleAdd}
                variant="warning"
                size="sm">+
            </Button>

            <Button
                onClick={handleAddToCart}
                variant="primary"
                 size="sm">
                Agregar al Carrito
            </Button>
             <Button
                    onClick={()=> navigate ('/')}
                     size="sm"
                    variant="success">
                    
                    Agregrar Mas Productos
                </Button>
          
            
        </div>
    );
}

export default Counter