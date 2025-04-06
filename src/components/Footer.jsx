import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaSkype } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-emerald-50 text-slate-800 pt-16 pb-10 mt-24 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-600">About JobBoard</h3>
          <p className="text-gray-600 leading-relaxed">
            JobBoard simplifies your hiring journey. We connect skilled job seekers
            with top-tier companies, making the search for talent and opportunity seamless.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mt-6">
            <a href="#" className="text-blue-600 hover:text-blue-800 transition text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition text-xl">
              <FaXTwitter />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition text-xl">
              <FaSkype />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-600">Explore Categories</h3>
          <ul className="space-y-3 text-gray-600">
            {["Design & Creatives", "Telecommunication", "Restaurant", "Programming", "Architecture"].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-600 transition-all">
                  • {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-600">Stay Updated</h3>
          <p className="text-gray-600 mb-5">
            Get the latest job alerts and career advice right in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          © 2025 JobBoard. All rights reserved. Built with ❤️ by{" "}
          <a href="#" className="text-blue-500 hover:underline">YourBrand</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
