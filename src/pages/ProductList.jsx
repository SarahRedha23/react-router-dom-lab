import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router"
function ProductList() {
    const [products, setProducts] = useState([])

    async function getAllProducts() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
        setProducts(response.data)
            console.log('function called')

    } 
 useEffect(()=>{
    getAllProducts()
 },[])  
        
  return (
    <div>
        
{products.map((oneProduct)=>
    <div key={oneProduct._id}>
        <p>Title: {oneProduct.title}</p>
        <Link to={`/products/${oneProduct._id}`}>Product Details</Link>
        </div>
    
)}

    </div>
  )
}

export default ProductList