import React from 'react';

const ProductDetail = ({ productDetail, setCategoryName }) => {
    const { imgURL, productName, location, resalePrice, originalPrice, yearsOfUse } = productDetail
    console.log(productDetail)
    return (
        <div className='mt-5'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-52 h-52' src={imgURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
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