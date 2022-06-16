import React from 'react';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoding] = useState(false);


    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoding(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoding(false);
        }; getProduct();
    },[id]);


    const Loading = ()=>{
       return (
          <> 
            Loding..........
            </>
       )  
    }
 const ShowProduct = ()=>{
 

    return (
        <>
        
            <div className=" col-md-6" >
            <img src={product.image}  className="margin-top-100px" alt={product.title} height="400px"  width="400px"/>
            </div>
            <div className = "col-md-6">
                <h4 className = "text-uppercase text-black-50 fw-bolder">
                    {product.category}
                </h4>
                <h1 className = "display-5 fw-bolder">{product.title}</h1>
                <p className = "lead fw-bolder"> Rating..{product.rating && product.rating.rate} <i className = "fa fa-star"></i></p>
                 <h3 className = "text-uppercase text-"> $ {product.price}...</h3> 
                 <p className = "lead "> {product.description}</p>
                 <button className="btn btn-outline-dark px-4 py-2  " onClick={() =>{
                     addProduct(product)
                 }}> Add to Cart</button>
                 <Link to="/cart" className="btn btn-dark ms-2 px-2 py-2  "> Go to Cart</Link>
                 
            </div>

    
        </> 
        )


 }



    return (
        <>
            <div className="container py-5">
                <div className="row py-5 justify-content-center">
                    {loading ? <Loading/> :<ShowProduct/>}
                </div>
            </div>
        </>

    )
}
export default Product;