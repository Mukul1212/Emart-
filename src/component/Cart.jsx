import React from 'react';
import {useSelector} from 'react-redux';



export default function Cart() {
  const state = useSelector((state)=>state.handleCart)




  return (
    <>
        
    <div className=" col-md-6" >
    <img src={state.image}  className="margin-top-100px" alt={state.title} height="400px"  width="400px"/>
    </div>
    <div className = "col-md-6">
        <h4 className = "text-uppercase text-black-50 fw-bolder">
            {state.category}
        </h4>
        <h1 className = "display-5 fw-bolder">{state.title}</h1>
        <p className = "lead fw-bolder"> Rating..{state.rating && state.rating.rate} <i className = "fa fa-star"></i></p>
         <h3 className = "text-uppercase text-"> $ {state.price}...</h3> 
         <p className = "lead "> {state.description}</p>
         <button className="btn btn-outline-dark px-4 py-2  "> Add to Cart</button>
         {/* <Link to="/cart" className="btn btn-dark ms-2 px-2 py-2  "> Go to Cart</Link> */}
         
    </div>


</> 
  )
}
