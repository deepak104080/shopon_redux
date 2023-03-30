import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const Cart = () => {
    const cartData = useSelector((state) => state.cart.cartList);

    return (
        <div className='row'>
            <div className='col-12'>
                <table className='table table-response table-striped'>
                    <tbody>
                        {
                            cartData && cartData.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{1}</td>
                                    <td style={{ width: '50px' }}><img src={item.image} className="img-fluid" alt="Product Pic" /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link to="/checkout"><button className='btn btn-primary'>Proced to Checkout</button></Link>
            </div>
        </div>
    )
}

export default Cart


//HW - Try modifying quantity - update cartData
//remove product