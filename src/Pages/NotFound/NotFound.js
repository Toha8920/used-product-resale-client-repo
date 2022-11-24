import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png" alt="" />
            <h2 className='text-4xl text-center mt-0'>Go Back to <Link to='/' className='underline'>Home</Link></h2>
        </div>
    );
};

export default NotFound;