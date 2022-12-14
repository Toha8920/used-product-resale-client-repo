import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://used-products-resale-server-lake.vercel.app/users')
            const data = await res.json()
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
    const buyers = users.filter(user => user.role === 'user');

    const handleDelete = (id) => {
        fetch(`https://used-products-resale-server-lake.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
            // .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }

    return (
        <div>
            <h2 className='text-2xl mb-3'>My Buyers</h2>
            {buyers?.map(buyer => <>
                <p className='text-xl border'>{buyer.email}</p>
                <button onClick={() => handleDelete(buyer._id)}>Delete</button>
            </>)}
        </div>
    );
};

export default AllBuyers;