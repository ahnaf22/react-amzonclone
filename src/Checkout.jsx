import React from 'react';
import './cssfiles/checkout.css'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';
import cartempty from './images/cartempty.png'

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout_wrap">
            <div className="checkout">
                <div className="checkout_left">
                    <img className="checkout_ad"
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                        alt="banner" />

                    <div>
                        <h2 className="checkout_title">Your Shopping Basket</h2>
                        {/* basket Items */}
                        <FlipMove
                            appearAnimation='accordionVertical'
                            duration={800}
                        >
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

                <div className="checkout_right">
                    <Subtotal />
                </div>
            </div>
            {
                !basket.length &&

                <div className="checkout_nobasket">
                    <img className="checkout_nobasketImage" src={cartempty} alt="cart empty" />
                    <h3>Please add some products to <br />make me a happy basket !</h3>
                </div>

            }
        </div>
    )
}

export default Checkout
