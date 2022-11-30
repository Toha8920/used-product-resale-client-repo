import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const AllSellers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://used-products-resale-server-lake.vercel.app/users');
            const data = await res.json();
            return (data);
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
    const sellers = users?.filter(user => user.role === 'seller');
    console.log(sellers);

    const handleDelte = (id) => {
        fetch(`https://used-products-resale-server-lake.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
            // .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }

    const handleVerified = (email) => {
        axios.patch(`https://used-products-resale-server-lake.vercel.app/products/${email}`)
            .then(res => { console.log(res.data) })

    }

    return (
        <div>
            <h1 className='text-2xl mb-3'>My Sellers</h1>
            {sellers?.map(seller => <>
                <p className='border rounded text-xl'>{seller.email}</p>
                <button onClick={() => handleVerified(seller.email)}>Verify</button>
                <br />
                <button onClick={() => handleDelte(seller._id)}>Delete</button>
            </>)}
        </div>
    );
};

export default AllSellers;