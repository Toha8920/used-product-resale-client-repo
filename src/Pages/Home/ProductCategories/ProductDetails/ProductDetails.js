import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductDetail from './ProductDetail';

const ProductDetails = () => {
    const product = useLoaderData()
    const [categoryName, setCategoryName] = useState(null)
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })
    const params = useParams()
    const newProduct = products.filter(i => i.category === params.categoryName)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {newProduct?.map(productDetail => <ProductDetail
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