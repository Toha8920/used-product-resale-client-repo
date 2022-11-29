import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useRole from '../Hooks/useRole';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [allRole] = useRole(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {allRole.role === 'seller' && <><li><Link to="/dashboard/add-product">Add Product</Link></li>
                            <li><Link to='/dashboard/my-products'>My Products</Link></li></>}
                        {allRole.role === 'user' && <><li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                            <li><Link to="/dashboard/my-wishlist">My Wishlist</Link></li></>}
                        {allRole.role === 'admin' && <>
                            <li><Link to='/dashboard/my-sellers'>My Sellers</Link></li>
                            <li><Link to='/dashboard/my-buyers'>My Buyers</Link></li>
                            <li><Link to="/dashboard/make-admin">Make admin</Link></li>
                        </>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;