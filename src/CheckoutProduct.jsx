import React, { forwardRef } from 'react'
import "./cssfiles/checkoutProduct.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';


const CheckoutProduct = forwardRef(({ id, title, image, price, rating }, ref) => {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id,
        })

    }
    return (
        <div ref={ref} className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="chkimage" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (<p><StarIcon className="star_icon" /></p>))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>

        </div>
    )
});

export default CheckoutProduct;
