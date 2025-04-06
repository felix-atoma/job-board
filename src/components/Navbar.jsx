import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Search Icon */}
        <Link to="/" className="flex items-center space-x-3 text-3xl font-bold text-blue-600">
          <FaSearch className="text-gray-600 text-2xl" />
          <span>JobBoard</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10">
          {[
            { name: "Home", path: "/" },
            { name: "Browse Jobs", path: "/browse-jobs" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <li key={index} className="relative">
              {item.name === "Job Details" ? (
                <button
                  className="relative text-gray-700 text-xl font-medium px-4 py-2 flex items-center space-x-2 hover:text-blue-500 transition-all duration-300"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>Job Details</span>
                  <FaChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link
                  to={item.path}
                  className="relative text-gray-700 text-xl font-medium px-4 py-2 hover:text-blue-600 transition-all duration-300
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px]
                    after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown Content */}
              <AnimatePresence>
                {isDropdownOpen && item.name === "Job Details" && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-48"
                  >
                    {["Software Engineer", "Data Analyst", "Product Manager"].map((job, idx) => (
                      <li key={idx}>
                        <Link
                          to={`/job-details/${job.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {job}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
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
            {[
              { name: "Home", path: "/" },
              { name: "Browse Jobs", path: "/browse-jobs" },
              { name: "Job Details", path: "#" },
              { name: "Contact", path: "/contact" }
            ].map((item, index) => (
              <div key={index} className="relative w-full text-center">
                {item.name === "Job Details" ? (
                  <button
                    className="text-gray-700 text-xl font-medium py-2 flex items-center justify-center space-x-2 hover:text-blue-500 transition-all duration-300"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>Job Details</span>
                    <FaChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-700 text-xl font-medium py-2 hover:text-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mobile Dropdown Content */}
                <AnimatePresence>
                  {isDropdownOpen && item.name === "Job Details" && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white shadow-md rounded-md mt-2"
                    >
                      {["Software Engineer", "Data Analyst", "Product Manager"].map((job, idx) => (
                        <li key={idx}>
                          <Link
                            to={`/job-details/${job.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300"
                            onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}
                          >
                            {job}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Login Button (Mobile) */}
            <Link
              to="/login"
              className="text-white text-xl font-semibold px-8 py-3 rounded-md shadow-md bg-blue-500"
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
