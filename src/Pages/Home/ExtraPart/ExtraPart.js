import React from 'react';
import { Link } from 'react-router-dom';

const ExtraPart = () => {
    return (
        <div className="hero min-h-screen mt-16" style={{ backgroundImage: `url("https://media.istockphoto.com/photos/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-picture-id968086564?b=1&k=20&m=968086564&s=612x612&w=0&h=n4ihvhMTaMQDoIxIxEj8tPAl6A0OinvYx0l51Wh9FQg=")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary"><Link to='/'>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ExtraPart;