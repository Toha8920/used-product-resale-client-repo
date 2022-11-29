import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: users } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return (data);
        }
    })
    const sellers = users.filter(user => user.role === 'seller')
    return (
        <div>
            <h1>My Sellers</h1>
            {sellers?.map(seller => <><p>{seller.email}</p></>)}
        </div>
    );
};

export default AllSellers;