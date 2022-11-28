import React from 'react';

const Order = ({ order }) => {
    const { productName, sellersName, phone, location, resalePrice } = order;
    console.log(order)
    return (
        <tr>
            <th>
                {productName}
            </th>
            <td>
                {sellersName}
            </td>
            <td>
                {phone}
            </td>
            <td>{location}</td>
            <td>
                {resalePrice}
            </td>
        </tr>
    );
};

export default Order;