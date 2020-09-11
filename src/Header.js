import React from 'react';
import './cssfiles/header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

    const [{ basket, user }] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }


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
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header_option">
                        <span className="header_optionLineOne">Hello {user ? user.email : 'Guest'}</span>
                        <span className="header_optionLineTwo">{user ? 'sign-out' : 'sign-in'}</span>
                    </div>
                </Link>

                <Link to="/orders">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">&orders</span>
                    </div>
                </Link>

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
