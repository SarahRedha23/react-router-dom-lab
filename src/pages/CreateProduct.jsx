import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
function CreateProduct() {
const [ formData, setFormData ] = useState({
        title:'',
        description:'',
        category:'',
        price:'',
        quantity:'',
        
    })
  const navigate = useNavigate()

    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    
async function handleSubmit(event) {
    event.preventDefault();

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/products`,
            {
                ...formData,
                price: Number(formData.price),
                quantity: Number(formData.quantity),
            }
        );

        navigate(`/products/${response.data._id}`);
    } catch (error) {
        console.error("Failed to create product:", error);
        alert("Could not create product. Please try again.");
    }
}

  return (
    <div>
        <h1>Create New Product</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Title:</label>
            <input 
            type="text" 
            value={formData.title}
            onChange={handleChange}
            name='title'
            id='title'
            
            />
            
            <label htmlFor="description">Description:</label>
            <input 
            type="text"
            value={formData.description}
            onChange={handleChange}
            name='description'
            id='description'

             />

            <label htmlFor="category">Category:</label>
            <input 
            type="text" 
            name='category'
            id='category'
            value={formData.category}
            onChange={handleChange}

            />
            <label htmlFor="price">Price:</label>
            <input 
            type="number" 
            name='price'
            id='price'
            value={formData.price}
            onChange={handleChange}

            />
            <label htmlFor="quantity">Quantity:</label>
            <input 
            type="number" 
            name='quantity'
            id='quantity'
            value={formData.quantity}
            onChange={handleChange}
            />
            
            <button>Add Product </button>
        </form>
    </div>
  )
}
  

export default CreateProduct


