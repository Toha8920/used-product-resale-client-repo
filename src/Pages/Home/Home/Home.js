import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;