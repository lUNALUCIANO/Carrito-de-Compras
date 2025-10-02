import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import { getCategory } from '../firebase/db'

function NavBarContainer() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategory()
        .then(data => setCategories(data))
    }, [])

    return <NavBar categories={categories}/>
    
}

export default NavBarContainer