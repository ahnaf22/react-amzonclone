import React from 'react';
import "./cssfiles/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {

    // user going to checkout  page using browser history
    const history = useHistory();
    const [{ basket, user }] = useStateValue();

    const handleCheckoutPage = () => {
        if (user) {
            if (basket.length <= 0) {
                alert("please add something to basket first!")
            }
            else {
                history.push('/payment');
            }

        }
        else {
            if (basket.length <= 0) {
                alert("please add something to basket first!")
            }
            else {
                alert('You need to login to proceed checkout');
                history.push('/login', { from: 'checkoutpath' });
            }

        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* part of homework */}
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>

                )}

                decimalScale={2}
                value={getBasketTotal(basket)} //part of homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button onClick={handleCheckoutPage}>Proceed to checkout</button>

        </div>
    )
}

export default Subtotal
