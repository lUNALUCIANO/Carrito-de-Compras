import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getItems,  getItemsByCategory } from "../firebase/db"
import Itemlist from "./ItemList"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()
   
    useEffect(() => {
      if ( id) {
        getItemsByCategory( id)
        .then( data => setItems(data))
      } else {
        getItems()
        .then(data => setItems(data))
      }
    }, [id])

    return (
        <Itemlist items={items}/>
    )
}
export default ItemListContainer