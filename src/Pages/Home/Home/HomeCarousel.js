import React from 'react';

const HomeCarousel = ({ add }) => {
    const { imgURL } = add;
    console.log(add)
    return (
        <div className='mt-8'>
            <div className="carousel rounded-box">
                <div className="carousel-item">
                    <img style={{ height: '300px', width: '350px' }} src={imgURL} alt="Burger" />
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;