import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Banner from '../Banner/Banner';
import ExtraPart from '../ExtraPart/ExtraPart';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })
    console.log(products);
    const advertise = products.filter(i => i.isAdvertise)
    console.log(advertise);
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <div>{advertise.map(i => <><img src={i.imgURL} alt="" /></>)}</div>
            <ExtraPart></ExtraPart>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;