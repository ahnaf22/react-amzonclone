import React from 'react';
import './cssfiles/product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
import { motion } from 'framer-motion';

function Product({ id, title, price, image, rating }) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        //   lets fire items to data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: { id, title, price, image, rating }
        });
    }

    return (
        <div className="product">
            <motion.div
                className="product_info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (<p><StarIcon className="star_icon" /></p>))}
                </div>
            </motion.div>


            <motion.img
                initial={{ transform: 'scale(0)' }}
                animate={{ transform: 'scale(1)' }}
                transition={{ delay: 1 }}
                src={image}
                alt="prod" />
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={addToBasket}
            >Add to basket </motion.button>
        </div>
    )
}

export default Product
