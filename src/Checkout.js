import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { placeOrder } from './redux/actions/checkoutAction';

const Checkout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartData = useSelector((state) => state.cart.cartList);

    const initialFormData = {
        name: 'Test User',
        mobile: '9999999999',
        address: 'test address'
    }
    const [formData, setFormData] = useState(initialFormData);

    const placeorder = () => {
        //placing order
        //api call to place order
        //temporarily storing order details on redux
        //details - all product details (redux.cart), mobile, address, name, paymentstatus
        //order id
        const orderObj = {
            ...initialFormData,
            products: cartData,
            paymentStatus: 'cod'
        }
        dispatch(placeOrder(orderObj));
        navigate('/order');
    }
    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    Details like mobile address
                </div>
                <div className='col-6'>
                    Payment Details
                </div>
            </div>

            <div className='row'>
                <div className='col-4'>
                    
                </div>
                <div className='col-4 text-center'>
                    <button className='btn btn-success' onClick={placeorder}>Place Order</button>
                </div>
                <div className='col-4'>
                    
                </div>
            </div>
        </>
    )
}

export default Checkout


//HW - Store order data on redux
//Form to take user details