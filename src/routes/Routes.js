import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/Home/ProductCategories/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import SignUp from "../Pages/SignUp/SignUp";

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
                path: '/categories/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => {
                    return fetch(``)
                }
            }
        ]
    }
])