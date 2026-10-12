import { Route, Routes } from "react-router"
import NavBar from "./components/NavBar"
import CreateProduct from "./pages/CreateProduct"
import ProductList from "./pages/ProductList"
import Homepage from "./pages/Homepage"
import ProductDetails from "./pages/ProductDetails"
function App() {
  return (
    <div>
      <NavBar/>
    <Routes>

    <Route path='/' element={<Homepage/>}/>
    <Route path='/products' element={<ProductList/>}/>
    <Route path='/new-product' element={<CreateProduct />}/>
    <Route path='/products/:productId' element={<ProductDetails/>}/>


    </Routes>
      
      
      </div>
  )
}

export default App