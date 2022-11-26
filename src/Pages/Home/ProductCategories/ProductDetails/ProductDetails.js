import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product);
    return (
        <div>
            {product?.map(i => <div><h2>{i.productName}</h2><p>{i.category}</p></div>)}
        </div>
    );
};

export default ProductDetails;