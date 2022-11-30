import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Banner from '../Banner/Banner';
import ExtraPart from '../ExtraPart/ExtraPart';
import ProductCategories from '../ProductCategories/ProductCategories';
import HomeCarousel from './HomeCarousel';

const Home = () => {
    const { data: products = [], } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://used-products-resale-server-lake.vercel.app/products');
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
            {advertise.length !== 0 ?
                <>
                    <h2 className='text-4xl text-center mt-3'>Advertise Item</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>{advertise.map(add => <>

                        <HomeCarousel
                            key={add._id}
                            add={add}
                        ></HomeCarousel>
                    </>

                    )}

                    </div>
                </>
                :
                ' '
            }
            <ExtraPart></ExtraPart>
            <ProductCategories></ProductCategories>
        </div >
    );
};

export default Home;