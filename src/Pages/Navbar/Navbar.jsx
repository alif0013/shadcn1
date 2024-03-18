import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <span className="text-lg font-bold"> <img className="w-20 md:w-24" src="https://i.ibb.co/n7RFQ6F/colorful-logo-1.jpg" alt="" /></span>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><Link to="/" className=" hover:bg-gray-50 px-3 py-2 rounded-md">Home</Link></li>
                            <li><Link to="/blog" className=" hover:bg-gray-50 px-3 py-2 rounded-md">Blog</Link></li>
                            <li><Link to="/products" className=" hover:bg-gray-50 px-3 py-2 rounded-md">Products</Link></li>
                            <li><Link to="/contact" className=" hover:bg-gray-50 px-3 py-2 rounded-md">Contact</Link></li>
                            {/* <li><Link to="/"  className=" hover:bg-gray-50 px-3 py-2 rounded-md">About</Link></li> */}
                            <li><Link to="/login" className="bg-black text-white hover:bg-black px-3 py-2 rounded-md">Login</Link></li>

                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <ul className="bg-gray-100">
                    <li><Link to="/" className="block  hover:bg-gray-50 px-3 py-2">Home</Link></li>
                    <li><Link to="/blog" className="block  hover:bg-gray-50 px-3 py-2">Blog</Link></li>
                    <li><Link to="/products" className="block  hover:bg-gray-50 px-3 py-2">Products</Link></li>
                    <li><Link to="/contact" className="block  hover:bg-gray-5 px-3 py-2">Contact</Link></li>
                    <li><Link to="/login" className="block  hover:bg-gray-5 px-3 py-2">Login</Link></li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
