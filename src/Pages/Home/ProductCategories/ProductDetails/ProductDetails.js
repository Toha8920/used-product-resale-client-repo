import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {product?.map(productDetail => <ProductDetail
                key={productDetail._id}
                productDetail={productDetail}
            >
            </ProductDetail>)}
        </div>
    );
};

export default ProductDetails;