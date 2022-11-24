import React from 'react';
import Banner from '../Banner/Banner';
import ExtraPart from '../ExtraPart/ExtraPart';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <ExtraPart></ExtraPart>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;