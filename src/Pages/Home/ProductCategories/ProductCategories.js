import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const ProductCategories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://used-products-resale-server-lake.vercel.app/categories')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products, 'kdf');
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default ProductCategories;