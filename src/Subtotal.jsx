import React from 'react';
import "./cssfiles/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [{ basket, subTotal }] = useStateValue();

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
                value={subTotal} //part of homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button>Proceed to checkout</button>

        </div>
    )
}

export default Subtotal
