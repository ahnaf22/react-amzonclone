import React, { useEffect } from 'react';
import './cssfiles/payment.css'
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    useEffect(() => {
        if (!user) {
            history.push('/');
        }
    }, [user])


    return (
        <div className="payment">
            <div className="payment_container">
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
                <div className="payment_section"></div>
                <div className="payment_section"></div>
            </div>
        </div>
    )
}

export default Payment
