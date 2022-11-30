import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const MakeAdmin = () => {
    const { data: roles } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://used-products-resale-server-lake.vercel.app/users')
            const data = await res.json()
            return (data);
        }
    })

    return (
        <div>

            {roles?.map(role => <><p>Role: <span>{role.role}</span></p><button className='border'>Make Admin</button></>)}
        </div>
    );
};

export default MakeAdmin;