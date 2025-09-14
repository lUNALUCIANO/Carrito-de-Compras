import { useState, useEffect } from "react"
import { withLoanding } from "../hoc/withLoading"
import Itemlist from "./ItemList"
import { useParams } from "react-router"

const ItemListWithLoading = withLoanding ( Itemlist)

function ItemListContainer() {
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
      const proCompleto = "https://dummyjson.com/products"
      const catProductos = `https://dummyjson.com/products/category/${id}`

      fetch(id ? catProductos : proCompleto)
      .then(res => res.json())
      .then(data  => setItems(data.products))
    }, [id])



    return (
        <ItemListWithLoading items={items}/>
    )
}
export default ItemListContainer;