import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaSkype } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-emerald-50 text-slate-950 py-12">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            Our platform streamlines the hiring process, connecting job seekers 
            with top employers effortlessly. Whether you're looking for the perfect 
            role or the best talent, we make the process seamless.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition text-xl">
              <FaXTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition text-xl">
              <FaSkype />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            {["Design & Creatives", "Telecommunication", "Restaurant", "Programming", "Architecture"].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get updates about new job opportunities and career tips.
          </p>
          <form className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
            <button 
              type="submit"
              className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        <p>Copyright © 2025 All rights reserved | Designed by <a href="#" className="text-blue-400 hover:underline">YourBrand</a></p>
      </div>
    </footer>
  );
};

export default Footer;
