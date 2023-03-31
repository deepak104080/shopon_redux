import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Menubar = () => {
    const stateData = useSelector((state) => state);
    const cartData = useSelector((state) => state.cart.cartList);
    console.log('cartData - ', stateData);
    console.log('cartData - ', cartData);
    return (
        <div className='row menubar-area'>
            <div className='col-10'>

                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category/electronics">Electronics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category/jewelery">Jewelery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category/men's clothing">Mens' Clothing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category/women's clothing">Womens' Clothing</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/cart">Cart</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='col-2 text-right'>
                <Link to="/cart"><span>Cart Items - {cartData.length}</span></Link>
            </div>
        </div>
    )
}

export default Menubar




// Componnet - action -  redux middleware (redux-saga, redux-thunk) - action  reducer - store ------------ selector