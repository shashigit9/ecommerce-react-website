import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../data/Products";
import { useCart } from "../context/CartContext";

export default function ProductDetails(){
    const {id}=useParams();
    const[product,setProduct]=useState(null)
    const navigate=useNavigate()
    const {addToCart,cartItems}=useCart();

    useEffect(()=>{
        const foundProduct=getProductById(id)
        if(!foundProduct){
            navigate('/')
            return;
        } 
         setProduct(foundProduct)
    },[id])
    if (!product) return <h2>Loading...</h2>;

         
     const productInCart = cartItems.find(
    (item) => item.id === product.id
  );
    
        const productQuantityLabel=productInCart?
        `(${productInCart.quantity})`
        :'';

    return (
        <div className="page">
            <div className="container">
                <div className="product-details-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-details-content">
                        <h1 className="product-details-name">{product.name}</h1>
                        <p className="product-details-price">{product.price}</p>
                        <p className="product-details-description">{product.description}</p>
                        <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add to Cart {productQuantityLabel}</button>
                  </div>
                </div>
            </div>
        </div>
    )
}