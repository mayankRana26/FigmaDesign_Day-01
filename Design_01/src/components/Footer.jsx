import React from 'react';
import { Link } from 'react-router-dom'; 
const Footer = () => {
  return (
    <footer className="bg-pink-700 text-white py-12 px-4 md:px-8 lg:px-12 mt-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

          
          <div className="flex flex-col items-start">
           
            <Link to="/" className="text-3xl font-bold mb-4 text-white">
                <img src="/logo.png" alt="Logo" className="h-15" /> 
            </Link>
            
         
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-white hover:text-pink-200 transition-colors duration-200">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-pink-200 transition-colors duration-200">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c1.7 1.2 3.7 2 5.7 2A12.66 12.66 0 0022 10.14V8a2 2 0 00-.7-.6l.7-.7z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-pink-200 transition-colors duration-200">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </div>
          </div>

      
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="list-none space-y-2">
              <li><Link to="/" className="hover:text-pink-200 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-pink-200 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="hover:text-pink-200 transition-colors duration-200">Services</Link></li>
              <li><Link to="/find-doctor" className="hover:text-pink-200 transition-colors duration-200">Find a Doctor</Link></li>
              <li><Link to="/contact" className="hover:text-pink-200 transition-colors duration-200">Contact</Link></li>
            </nav>
          </div>

   
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <nav className="list-none space-y-2">
              <li><Link to="/health-articles" className="hover:text-pink-200 transition-colors duration-200">Health Articles</Link></li>
              <li><Link to="/video-library" className="hover:text-pink-200 transition-colors duration-200">Video Library</Link></li>
              <li><Link to="/community-forum" className="hover:text-pink-200 transition-colors duration-200">Community Forum</Link></li>
              <li><Link to="/faqs" className="hover:text-pink-200 transition-colors duration-200">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-pink-200 transition-colors duration-200">Privacy Policy</Link></li>
            </nav>
          </div>

          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 text-pink-200 mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
                <p>Durga Colony Roorkee Uttrakhand</p>
              </div>
              <div className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 text-pink-200 mr-2 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.2 1.98A18.8 18.8 0 013 3.2A2 2 0 014.08 1h3a2 2 0 012 1.83l.7 4.9a2 2 0 01-1.18 2.2l-2.94 1.45a12.92 12.92 0 009.68 9.68l1.45-2.94a2 2 0 012.2-1.18l4.9.7A2 2 0 0122 16.92z"></path>
                </svg>
                <p>+91 9027704514</p>
              </div>
              <div className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 text-pink-200 mr-2 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <p>Sakhiindiafoundation@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;