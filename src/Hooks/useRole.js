import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const useRole = (email) => {
    console.log(email);
    const [allRole, setAllRole] = useState('user')
    const [roleLoading, setRoleLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`).then(res => res.json()).then(data => {
            setRoleLoading(false)
            setAllRole(data)
        })
    }, [email])
    console.log(allRole);
    return [allRole, roleLoading]
};

export default useRole;