import React from 'react';
import './cssfiles/product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {

    const [state, dispatch] = useStateValue();
    console.log(state.subTotal);

    const addToBasket = () => {
        //   lets fire items to data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id, title, price, image, rating
            }
        });
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (<p><StarIcon className="star_icon" /></p>))}
                </div>
            </div>


            <img src={image} alt="prod" />
            <button onClick={addToBasket}>Add to basket </button>
        </div>
    )
}

export default Product
