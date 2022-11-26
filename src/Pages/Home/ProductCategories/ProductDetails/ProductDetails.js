import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductDetail from './ProductDetail';

const ProductDetails = () => {
    const product = useLoaderData()
    const [categoryName, setCategoryName] = useState(null)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {product?.map(productDetail => <ProductDetail
                    key={productDetail._id}
                    productDetail={productDetail}
                    setCategoryName={setCategoryName}
                >
                </ProductDetail>)}
            </div>
            <div>
                {categoryName &&
                    <BookingModal
                        categoryName={categoryName}
                    ></BookingModal>}
            </div>
        </div>
    );
};

export default ProductDetails;