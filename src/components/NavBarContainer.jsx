import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import { getCategory, getItems } from '../firebase/db'

function NavBarContainer() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        getCategory()
        .then(data => setCategories(data))
        getItems()
        .then(data => setProducts(data))
    }, [])

    return <NavBar categories={categories} products={products}/>
    
}

export default NavBarContainer