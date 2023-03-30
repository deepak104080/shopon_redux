import React from 'react'
import { useSelector } from 'react-redux'

const Order = () => {

    const orderDetails = useSelector((state) => state.order.orderDetails);
    const {name, mobile, address, products, paymentStatus, orderid } = orderDetails;
    console.log(orderDetails);
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <h2>Your order is successfully placed.</h2>
                </div>
                <div className='col-12'>
                    <h3>Order Details</h3>
                    <div>Order ID - {orderid}</div>
                    <div>Name - {name}</div>
                    <div>Mobile - {mobile}</div>
                    <div>Address - {address}</div>
                    <div>Payment Status - {paymentStatus}</div>

                    {
                        <table className='table table-response table-striped'>
                        <tbody>
                            {
                                products && products.map((item, index) => (
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
                    }
                </div>
            </div>

        </>
    )
}

export default Order
