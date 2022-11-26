import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Pr from './Pr'
import toast from 'react-hot-toast';
const MyProducts = () => {

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('product delete successfully')
                    refetch();
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Years Of Use</th>
                            <th>Resale Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <Pr
                                product={product}
                                key={product._id}
                                handleDelete={handleDelete}
                            ></Pr>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyProducts;