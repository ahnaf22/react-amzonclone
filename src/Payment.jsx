import React, { useEffect } from 'react';
import './cssfiles/payment.css'
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    // useEffect(() => {
    //     if (!user) {
    //         history.push('/');
    //     }
    // }, [user])


    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout!(<Link to='/checkout'>{basket?.length}items</Link>)</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>Bangladesh,Dhaka</p>
                    </div>
                </div>
                {/* review items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>review Itmes and delivery</h3>
                    </div>
                    <div className="payment_items">
                        <FlipMove >
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </FlipMove>
                    </div>
                </div>
                {/* payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>payment method</h3>
                    </div>
                    <div className="payment_details">
                        {/* stripe works here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
