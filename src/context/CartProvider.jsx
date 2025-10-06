import { CartContext } from "../context/CartContext"
import { useState } from "react"

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = item => {
    if (cart.some( prod => prod.id === item.id)){
      return
    }
      setCart([...cart , item])
  }

  const deleteItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
  }

  const obtenerCant = () =>{
      const cantidades = cart.map( item => item.count)
      const sumaCantidad = cantidades.reduce((acc, current) => acc + current, 0) 
      return sumaCantidad 
  }

  const getTotal = () =>{
      const precios = cart.map( item => item.count*item.price)
      const total = precios.reduce((acc, current) => acc + current, 0)
      return total
  }

  const clearCart = () => setCart([])

  const value = {
     addToCart ,
      obtenerCant,
       getTotal ,
        cart, 
        clearCart ,
         deleteItem 
  }

      return(
        <CartContext.Provider value={value }>
            {children}
        </CartContext.Provider>
      )
}
export default CartProvider