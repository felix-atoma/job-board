import React from "react";
import { Link } from "react-router-dom";

const Relationships = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-16 py-16 bg-gray-100">
      {/* Right Side Content */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          We Build Lasting Relationships Between Candidates & Businesses
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our platform connects top talent with the best opportunities, ensuring 
          that businesses find the perfect fit for their needs while candidates 
          secure roles that align with their skills and career goals. Join us today 
          and take the next step toward success.
        </p>
        <Link
          to="/find-talent"
          className="relative text-white text-lg font-semibold px-6 py-3 rounded-md shadow-md 
          bg-blue-500 overflow-hidden transition-all duration-500 before:absolute before:inset-0 
          before:bg-blue-600 before:scale-x-0 before:origin-left hover:before:scale-x-100 
          before:transition-transform before:duration-500"
        >
          Find Talent
        </Link>
      </div>
      
      {/* Left Side Image Placeholder */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="/path-to-your-image.jpg" 
          alt="Business and Candidate Connection" 
          className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Relationships;
