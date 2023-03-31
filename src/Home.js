import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './redux/actions/productActions';
import { Link } from 'react-router-dom';
// import TempButton from './TempButton';
import { SubmitButton, ResetButton } from './TempButton';

const Home = () => {

  // const [products, setProducts] = useState([])
  //action method, action object, reducer, store, (store config and provider), selector
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.listProducts);

  const callApi = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    // setProducts(data);
    dispatch(setProducts(data));
  }

  useEffect(() => {
    callApi();
  }, [])

  useEffect(() => {
    console.log('Products List - ', products);
  })

  return (
    <>
    <div className='row'>
      {
        products && products.map((item, index) => (
          <div className='col-3' key={item.id}>
            <div className="card" >
              <img src={item.image} className="card-img-top product-image-list" alt="..." />
              <div className="card-body">
                <h5 className="card-title product-title-list">{item.title}</h5>
                <p className="card-text product-description-list">{item.description}</p>
                <h5 className="card-title">{item.price}</h5>
                <Link to={`/product/${item.id}`} className="btn btn-primary button-buy-now">Buy Now</Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    {/* <TempButton>aiuhrfliherfoihweroif</TempButton> */}
    {/* <SubmitButton>submit...</SubmitButton>
    <ResetButton>reset...</ResetButton> */}
    </>
  )
}

export default Home
