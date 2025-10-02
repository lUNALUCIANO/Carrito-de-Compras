
import ItemListContainer from './components/ItemListContainer'
import NavBarContainer from "./components/NavBarContainer"
import { BrowserRouter, Routes, Route } from "react-router"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
import { Toaster } from 'react-hot-toast'


function App() {


  return (
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<CartContainer/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}
export default App
