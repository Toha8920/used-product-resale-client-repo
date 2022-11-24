import React from 'react';

const Product = ({ product }) => {
    const { id, title, yearsOfUse, sellersName, resalePrice, originalPrice, image } = product;
    console.log(product)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-52 h-52' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Resale Price:$ {resalePrice}</p>
                <p>Original Price Price:$ {originalPrice}</p>
                <p>Years of use: {yearsOfUse}y</p>
                <p>Sellers: {sellersName}y</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;