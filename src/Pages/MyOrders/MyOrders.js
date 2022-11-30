import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Order from './Order';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: orders = [], isLoading, } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-server-lake.vercel.app/myorders/${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <div className='flex justify-center items-center'>
            <div class="flex justify-center items-center">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }


    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Sellers Name</th>
                        <th>Phone Number</th>
                        <th>Location</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <Order
                            key={order._id}
                            order={order}
                        ></Order>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyOrders;