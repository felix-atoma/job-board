import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Search Icon */}
        <Link to="/" className="flex items-center space-x-3 text-3xl font-bold text-blue-600">
          <FaSearch className="text-gray-600 text-2xl" />
          <span>JobBoard</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10">
          {["Home", "Browse Jobs", "Job Details", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative text-gray-700 text-xl font-medium px-4 py-2 hover:text-blue-500 transition-all duration-300 
                after:block after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 
                after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button (Desktop) */}
        <Link
          to="/login"
          className="relative text-white text-xl font-semibold px-8 py-3 rounded-md shadow-md 
            bg-blue-500 overflow-hidden transition-all duration-500 
            before:absolute before:inset-0 before:bg-green-400 before:scale-x-0 before:origin-left 
            hover:before:scale-x-100 before:transition-transform before:duration-500 
            flex items-center justify-center"
        >
          Login
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-6 flex flex-col items-center space-y-6"
          >
            {["Home", "Browse Jobs", "Job Details", "Contact"].map((item, index) => (
              <Link
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-700 text-xl font-medium py-2 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            {/* Login Button (Mobile) */}
            <Link
              to="/login"
              className="relative text-white text-xl font-semibold px-8 py-3 rounded-md shadow-md 
            bg-blue-500 overflow-hidden transition-all duration-500 
            before:absolute before:inset-0 before:bg-green-400 before:scale-x-0 before:origin-left 
            hover:before:scale-x-100 before:transition-transform before:duration-500 
            flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
