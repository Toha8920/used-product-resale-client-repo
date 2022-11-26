import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';

const BookingModal = ({ categoryName }) => {
    const { productName, resalePrice } = categoryName;
    const { user } = useContext(AuthContext);
    const [closeModal, setCloseModal] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const sellersName = form.sellersName.value;
        const email = form.email.value;
        const resalePrice = form.resalePrice.value;
        const productName = form.productName.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const orderInformation = {
            sellersName,
            email,
            resalePrice,
            productName,
            phone,
            location
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInformation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Booked your order')
                    setCloseModal(true)
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" name='sellersName' value={user?.displayName} disabled className="input w-full" />
                        <input type="text" name='email' value={user?.email} disabled className="input w-full" />
                        <input type="text" name='resalePrice' value={resalePrice} disabled className="input w-full" />
                        <input type="text" name='productName' value={productName} disabled className="input w-full" />
                        <input type="text" name='phone' placeholder='Your Phone Number' className="input w-full" />
                        <input type="text" name='location' placeholder='Your Meting Location' className="input w-full" />
                        <br />

                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;