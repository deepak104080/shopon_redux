import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './template/Header';
import Menubar from './template/Menubar';
import Footer from './template/Footer';

import Category from './Category';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';
import Order from './Order';
import NotFound from './NotFound';
import Home from './Home';

function App() {
  return (
    <>
      <div className='container'>
        <BrowserRouter>

          <Header />

          <Menubar />

          <div className='row content-area'>
            <div className='col'>
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/category/:category' element={<Category />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/order' element={<Order />} />
                <Route path='/' element={<Home />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </div>
          </div>

          <Footer />

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;



//HW - Add Wishlist Feature on this E-Commerce