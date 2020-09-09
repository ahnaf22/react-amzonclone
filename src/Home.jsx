import React from 'react';
import "./cssfiles/home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />

                <div className="home_row">
                    <Product
                        id={1}
                        title="Product title"
                        price={20.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400.jpg"
                        rating={4}
                    />
                    <Product
                        id={2}
                        title="product titleproduct titleproduct titleproduct titleproduct titleproduct titleproduct titleproduct title"
                        price={20.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400.jpg"
                        rating={4}
                    />

                </div>
                <div className="home_row">
                    <Product
                        id={3}
                        title="Product title"
                        price={20.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400.jpg"
                        rating={4}
                    />
                    <Product
                        id={4}
                        title="Product title"
                        price={20.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400.jpg"
                        rating={4}
                    />
                    <Product
                        id={5}
                        title="Product title"
                        price={20.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400.jpg"
                        rating={4}
                    />

                </div>
                <div className="home_row">
                    <Product
                        id={6}
                        title="product titleproduct titleproduct titleproduct titleproduct titleproduct titleproduct titleproduct title"
                        price={20.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400.jpg"
                        rating={4}
                    />

                </div>
            </div>



        </div>
    )
}

export default Home
