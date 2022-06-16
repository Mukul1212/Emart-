import React from 'react';
import fi2 from '../img/fi2.jpg';
import Products from './Products';
export default function Home() {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src={fi2} className="card-img" alt="Backgound" height="550px" />
                <div className="card-img-overlay  d-flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder text-black mb-0">New Season Arrivals</h5>
                    <p className="card-text text-black   fw-bolder lead fs-2">CHECKS OUT THE ALL TREND</p>
                    </div>
                 </div> 
            </div>
            <Products/>
        </div>
    )
}
