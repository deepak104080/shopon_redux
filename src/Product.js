import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from './redux/actions/productActions';
import { setCartData } from './redux/actions/cartActions';

const Product = () => {
  const temp = useParams();
  const { id } = temp
  const dispatch = useDispatch();

  console.log('id in products page- ', id);

  const [cartStatus, setCartStatus] = useState(false);

  const product = useSelector((state) => state.products.selectedProduct);
  const products = useSelector((state) => state.products.listProducts);
  const cartData = useSelector((state) => state.cart.cartList);

  // console.log('-----------------product data-------------');
  // console.log(product);
  // console.log('-----------------products hompage data-------------');
  // console.log(products);


  const callApi = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    // setProducts(data);
    dispatch(setSelectedProduct(data));
  }

  const checkCartStatus = () => {
    let temp = cartData && cartData.map((item) => {
      return item.id
    })
    // temp - [4,5,6,7,2]
    // console.log('####################');
    // console.log(temp);
    // console.log(cartData);
    // console.log('####################');
    if(temp.indexOf(product.id) >= 0) {
      setCartStatus(true);
    }
    else {
      setCartStatus(false);
    }
    // console.log('--------------checking cart status--------------');
  }

  useEffect(() => {
    callApi(id);
  }, [id])

  useEffect(() => {
    checkCartStatus();
  })

  useEffect(() => {
    //check if current product id exists in cart or not
    checkCartStatus();
  }, [cartData])

  useEffect(() => {
    console.log('----------------carStatus--------------', cartStatus);
  })

  const addToCartFn = (product) => {
    console.log('adding to cart');
    dispatch(setCartData(product));
  }

  return (
    <div className='row'>
      {product.id ?
        <>
          <div className='col-6'>
            <img src={product.image} alt="Product Pic" className='img-fluid' />
          </div>
          <div className='col-6'>
            <h1>{product.title}</h1>
            <h2>Price - {product.price}</h2>
            <div>{product.description}</div>
            <h4>Rating - {product.rating.rate} - Liked By {product.rating.count}</h4>
            {!cartStatus && <button onClick={() => addToCartFn(product)}>Add to Cart</button>}
            <button>Buy Now</button>
          </div>
        </>
        :
        <>
          <div className='col-12'>
            <h3>Our services are down. Plz try after sometime.</h3>
            <button onClick={() => callApi(id)}>Refresh</button>
            {/* hit window.location.href */}
          </div>
        </>
        }
    </div>
  )
}

export default Product


//HW - Show loader for the API time