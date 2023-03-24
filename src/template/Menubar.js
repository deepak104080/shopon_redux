import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div className='row menubar-area'>
            <div className='col-12'>

                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        {/* <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/home">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/category">Category</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/product">Product</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Menubar
