import React from 'react';
import './cssfiles/footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footerbox">
                <div className="footer_box">
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="am_logo" />
                </div>
                <div className="footer_box">
                    <div className="footer_info">
                        <h4>Get to know us</h4>
                        <p>Career</p>
                        <p>Get to know us</p>
                        <p>Tour amazon fulfilment centre</p>
                        <p>Amazon Prime</p>
                        <p>Help</p>
                    </div>
                </div>
                <div className="footer_box">
                    <div className="footer_info">
                        <h4>Make money with Amazon</h4>
                        <p>Sell on Amazon</p>
                        <p>Sell Under Private Brands</p>
                        <p>Sell on Amazon Business</p>
                        <p>Sell on Amazon Handmade</p>
                        <p>Sell Services</p>
                        <p>Associate Programme</p>
                        <p>Amazon Pay</p>
                        <p>Advertise your products</p>
                    </div>
                </div>
                <div className="footer_box">
                    <div className="footer_info">
                        <h4>Amazon Payment Methods</h4>
                        <p>Amazon Platinum Mastercard</p>
                        <p>Amazon classic Mastercard</p>
                        <p>Amazon Money Store</p>
                        <p>Gift Cards</p>
                        <p>Currency Converter</p>
                        <p>Shop with points</p>
                    </div>
                </div>
            </div>

            <div className="footer_copyright"><h4> © Fake Amazon 2020</h4></div>
        </div>
    )
}

export default Footer
