import React from 'react';

const Pr = ({ product, handleDelete }) => {
    const { _id, imgURL, productName, resalePrice, yearsOfUse } = product;
    console.log(product)
    return (
        <tr>
            <th>
                {productName}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imgURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {yearsOfUse}
            </td>
            <td>{resalePrice}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default Pr;