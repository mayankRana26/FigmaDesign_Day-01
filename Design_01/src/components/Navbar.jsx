// Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); 
    
    const navLinks = [
        { name: "Home", href: "/", visibility: "sm:inline" },
        { name: "Education", href: "/education", visibility: "sm:inline" },
        { name: "Tracker", href: "/tracker", visibility: "md:inline" },
        { name: "Yojanas", href: "/yojanas", visibility: "md:inline" },
        { name: "Community", href: "/community", visibility: "lg:inline" },
        { name: "Shop", href: "/shop", visibility: "xl:inline" },
        { name: "Nutrition", href: "/nutrition", visibility: "xl:inline" },
    ];

    const isActive = (href) => {
     
        if (href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(href);
    };


    return (
        <nav className="shadow-md bg-white border-b border-gray-200">
            <div className="grid grid-cols-3 items-center p-3 ">
            
                <div className="logo flex items-center ml-30">
                    <img src="/logo.png" alt="logo" className="h-20 w-20" />
                </div>

                <div className="hidden md:flex justify-center text-lg font-semibold space-x-2 mr-30">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`px-3 py-2 rounded-md ${link.visibility} transition duration-150 
                                ${isActive(link.href) 
                                    ? 'text-pink-600' 
                                    : 'text-gray-800 hover:text-pink-600' 
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex justify-end items-center mr-6 text-lg space-x-3 font-semibold">
                    <button className="text-black px-3 py-1.5 rounded-md hover:bg-gray-100 transition">
                        Sign Up
                    </button>
                    <button className="bg-pink-600 px-3 py-1.5 w-32 rounded-md text-white hover:bg-pink-700 transition">
                        Login
                    </button>
                </div>

                <div className="md:hidden col-start-3 flex justify-end mr-5">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-gray-800 focus:outline-none p-2"
                        aria-expanded={isOpen}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* 2. Mobile Menu Dropdown */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsOpen(false)} 
                            className={`block px-3 py-2 rounded-md text-base font-semibold transition
                                ${isActive(link.href) 
                                    ? 'bg-pink-50 text-pink-700' // Mobile active style
                                    : 'text-gray-800 hover:bg-pink-50 hover:text-pink-600' // Mobile inactive style
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                {/* Mobile Menu Buttons */}
                <div className="flex flex-col space-y-2 p-4 border-t border-gray-100">
                    <button className="text-gray-800 px-3 py-2 rounded-md font-semibold border border-gray-300 hover:bg-gray-100 transition">
                        Sign Up
                    </button>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-2 rounded-md font-semibold transition">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;