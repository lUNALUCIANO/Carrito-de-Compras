import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Button from "react-bootstrap/Button"

function VaciarCarritoButton() {
    const { clearCart, cart } = useContext(CartContext)

    if (!cart.length) return null

    return (
        <div className="d-flex align-items-center gap-2 mt-3">

            <Button
                onClick={clearCart}
                size="sm"
                variant="primary">
                Vaciar Carrito
            </Button>
          
        </div>
    )
}
export default VaciarCarritoButton
