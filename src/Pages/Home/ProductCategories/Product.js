import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, categoryName, categoryImg } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-16">
            <figure><img className='w-52 h-52' src={categoryImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/categories/${categoryName.split(' ')[0]}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Product;