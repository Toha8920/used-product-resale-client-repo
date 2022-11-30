import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const ProductDetail = ({ productDetail, setCategoryName }) => {
    const { name, imgURL, productName, location, resalePrice, originalPrice, yearsOfUse, date
        , isVerified } = productDetail
    const { user } = useContext(AuthContext);
    console.log(user)
    console.log(productDetail, 'erdf');
    return (
        <div className='mt-5'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-52 h-52' src={imgURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>Sellers Name: {name} {isVerified && <span>&#9989;</span>}</p>
                    <p>Location: {location}</p>
                    <p>Original Price: {originalPrice}</p>
                    <p>Resale Price: {resalePrice}</p>
                    <p>Years Of Use: {yearsOfUse}</p>
                    <p>Date:{date}</p>
                    <div className="card-actions justify-end">
                        <label
                            onClick={() => setCategoryName(productDetail)}
                            htmlFor="booking-modal"
                            className="btn btn-primary text-white">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;