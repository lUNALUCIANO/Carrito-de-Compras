
import ItemListContainer from './components/ItemListContainer'
import NavBarContainer from "./components/NavBarContainer"
import { BrowserRouter, Routes, Route } from "react-router"
import ItemDetailContainer from "./components/ItemDetailContainer"


function App() {


  return (
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
