import React from 'react';

const HomeCarousel = ({ add }) => {
    const { imgURL, resalePrice } = add;
    console.log(add)
    return (
        <div className='mt-8'>
            <img className='' style={{ height: '300px', width: '350px' }} src={imgURL} alt="Burger" />
            <p className='text-2xl'>Price: ${resalePrice}</p>
        </div>
    );
};

export default HomeCarousel;