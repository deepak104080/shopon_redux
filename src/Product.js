import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
  const products = useSelector((state) => state.products.listProducts);
  return (
    <div className='row'>
      {
        products && products.map((item, index) => (
          <div className='col-3'>
            <div className="card" >
              <img src={item.image} className="card-img-top product-image-list" alt="..." />
              <div className="card-body">
                <h5 className="card-title product-title-list">{item.title}</h5>
                <p className="card-text product-description-list">{item.description}</p>
                <h5 className="card-title">{item.price}</h5>
                <a href="#" className="btn btn-primary button-buy-now">Buy Now</a>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Product
