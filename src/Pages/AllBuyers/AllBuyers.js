import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: users } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return (data);
        }
    })
    const buyers = users.filter(user => user.role === 'user')
    return (
        <div>
            {buyers?.map(buyer => <><p>{buyer.email}</p></>)}
        </div>
    );
};

export default AllBuyers;