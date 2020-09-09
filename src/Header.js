import React from 'react';
import './cssfiles/header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {

    const [{ basket }] = useStateValue();


    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="headerImg" />
            </Link>


            <div className="header_search">
                <input
                    className="header_searchInput"
                    type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">&orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            </div>

            {/* basket Icon */}
            <Link to="/checkout">
                <div className="header_basket ">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header-basketCount">{basket?.length}</span>
                </div>
            </Link>

        </div>
    )
}

export default Header
