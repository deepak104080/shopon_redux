import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from './redux/actions/productActions';

const Product = () => {
  const temp = useParams();
  const {id} = temp
  const dispatch = useDispatch();

  console.log('id in products page- ', id);

  const product = useSelector((state) => state.products.selectedProduct);
  const products = useSelector((state) => state.products.listProducts);

  console.log('-----------------product data-------------');
  console.log(product);
  console.log('-----------------products hompage data-------------');
  console.log(products);


  const callApi = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    // setProducts(data);
    dispatch(setSelectedProduct(data));
  }

  useEffect(() => {
    callApi(id);
  }, [id])
  
  return (
    <div className='row'>
        <div className='col-6'>
            <img src={product.image} alt="Product Pic" className='img-fluid'/>
        </div>
        <div className='col-6'>
            <h1>{product.title}</h1>
            <h2>Price - {product.price}</h2>
            <div>{product.description}</div>
            <h4>Rating - {product.rating.rate} - Liked By {product.rating.count}</h4>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product


//HW - Show loader for the API time