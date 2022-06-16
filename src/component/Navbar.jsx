import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';


const Navbar = () => {

  const state = useSelector((state)=>state.handleCart)
  console.log(state);
  return (
    <>

      <div>
        <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
          <div className="container">
            <Link className="navbar-brand fw-bold fs-4" to="/">LA COLLECTION</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
              </ul>
             <div className="buttons">
              <Link to="/Login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"> Login</i>
              </Link>
              <Link to="/Register" className="btn btn-outline-dark ms-2 ">
              <i className="fa fa-user-plus me-1"> Register</i>
              </Link>
              <Link to="/Cart" className="btn btn-outline-dark ms-2 ">
              <i className="fa fa-shopping-cart me-1"> Cart({state.length})</i>
              </Link>
             </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
