import Blog from '@/Pages/Blog/Blog';
import Contact from '@/Pages/Contact/Contact';
import Home from '@/Pages/Home/Home';
import Products from '@/Pages/Products/Products';
import Register from '@/Pages/Register/Register';
import Login from '@/Pages/login/Login';
import MainLayout from '@/layouts/MainLayout';
import { createBrowserRouter } from 'react-router-dom';

const myCreatedRoutes  = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/products',
                element: <Products></Products>,
            },
            {
                path: '/contact',
                element: <Contact></Contact> ,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default myCreatedRoutes;