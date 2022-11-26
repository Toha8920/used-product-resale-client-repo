import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const BookingModal = ({ categoryName }) => {
    const { category, productName, resalePrice } = categoryName;
    const { user } = useContext(AuthContext);
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={user?.displayName} disabled className="input w-full" />
                        <input type="text" value={user?.email} disabled className="input w-full" />
                        <input type="text" value={resalePrice} disabled className="input w-full" />
                        <input type="text" value={productName} disabled className="input w-full" />
                        <input type="text" placeholder='Your Phone Number' className="input w-full" />
                        <input type="text" placeholder='Your Meting Location' className="input w-full" />
                        <br />

                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;