import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Category = () => {
    const temp = useParams();
    const {category} = temp;
    console.log('category - ', category);

    const [tempCategoryProducts, setProducts] = useState([]);

    const callApi = async (category) => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
      const data = await response.json();
      setProducts(data);
    }

    useEffect(() => {
      callApi(category);
    }, [category])

    return (
      <div className='row'>
        {
        tempCategoryProducts && tempCategoryProducts.map((item, index) => (
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
    )
}

export default Category
