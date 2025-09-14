import { useState,} from "react"
import { Button } from "react-bootstrap"

function Counter (){
    const [count , setCount]= useState(0)

    const handleAdd = () => setCount(count +1)
    const handleSub = () => setCount (count -1)
    return(
        <div>
            <p>{count}</p>
            <Button onClick={handleAdd} variant="warning" className="me-2" >+</Button>
            <Button onClick={handleSub} variant="success" className="me-2">-</Button>
            <Button onClick={handleSub} variant="primary">Agregar al Carrito</Button>
        </div>
    )
}
export default Counter