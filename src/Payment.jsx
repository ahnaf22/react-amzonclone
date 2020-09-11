import React, { useEffect, useState } from 'react';
import './cssfiles/payment.css'
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import axios from './axios'



function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    // hooks for stripe
    const stripe = useStripe();
    const elements = useElements();

    // some states to control process
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState("");

    // most important snippet here
    useEffect(() => {

        // generate special secret stripe code to allow user to transaction
        //everytime basket changes,the money gets updated, so we need new secret key/token

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expect payment amount in currency subunits
                // so to make doller to pence we multiplied it by 100
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });

            setClientSecret(response.data.clientSecret);
        }

        // this is how to call aync function in useEffect
        getClientSecret();

    }, [basket]);




    const handleSubmit = async (e) => {
        // stripe works here
        e.preventDefault();
        setProcessing(true);

        // lets use stripe here
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // payment intent is like payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            history.replace('/orders');
        });
    }

    const handleChange = (e) => {
        //listens  for changes in cardElement
        //displays error
        setDisabled(e.empty);//if the event doesnt have any data it reamins disabled
        setError(e.error ? e.error.message : "");

    }

    // check if user logged in otherwise no payment happens
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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>
                                                {/* part of homework */}
                                                Order total: <strong>{value}</strong>
                                            </h3>

                                        </>

                                    )}

                                    decimalScale={2}
                                    value={getBasketTotal(basket)} //part of homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}

                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p>processing</p> : "Buy now"}
                                    </span>
                                </button>
                            </div>
                            {/* errors for the payment */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
