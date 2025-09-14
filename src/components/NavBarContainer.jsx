import NavBar from './NavBar'
import { useEffect, useState } from 'react'

function NavBarContainer() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return <NavBar categories={categories}/>
    
}

export default NavBarContainer