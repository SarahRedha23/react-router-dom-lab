import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from 'axios'
function ProductDetails() {
const { productId } = useParams();
const [product, setProduct] = useState(null);

async function getProduct(){
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
        setProduct(response.data)
    }
    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div>
        <h1>Product Details</h1>
        {product ? (<>
         <h2>{product.title}</h2>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Product ID: {product._id}</p>
  </>) : <h2>Loading...</h2>}
    </div>
  )
}

export default ProductDetails