import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddAProduct from "../Pages/AddAProduct/AddAProduct";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/Home/ProductCategories/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyProducts from "../Pages/MyProducts/MyProducts";
import MySellers from "../Pages/MySellers/MySellers";
import MyWishList from "../Pages/MyWishList/MyWishList";
import NotFound from "../Pages/NotFound/NotFound";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/categories/:categoryName',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/products/${params.categoryName}`)
                }
            },
            {
                path: '/addaproduct',
                element: <AddAProduct></AddAProduct>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/add-product', element: <AddAProduct />

            },
            { path: '/dashboard/my-products', element: <MyProducts /> }, {
                path: '/dashboard/my-orders', element: <MyOrders />
            }, {
                path: '/dashboard/my-sellers', element: <MySellers />
            },
            {
                path: '/dashboard/my-wishlist', element: <MyWishList />
            },
        ]
    }
])