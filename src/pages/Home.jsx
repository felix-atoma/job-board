import React from "react";
import { Link } from "react-router-dom";
import JobCarousel from "../components/JobCarousel";
import Relationships from "../components/Relationships";

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Easiest way to find a perfect job
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mt-4 text-blue-600">
            Find Your Next Dream Job | Find Talent
          </h2>
          <div className="mt-6 flex space-x-4">
            <Link
              to="browse-jobs"
              className="relative text-white text-lg sm:text-xl font-semibold px-6 sm:px-8 py-3 rounded-md shadow-md 
              bg-blue-500 overflow-hidden transition-all duration-500 before:absolute before:inset-0 
              before:bg-blue-600 before:scale-x-0 before:origin-left hover:before:scale-x-100 
              before:transition-transform before:duration-500"
            >
              Looking for a Job
            </Link>
            <Link
              to="/talents"
              className="relative text-white text-lg sm:text-xl font-semibold px-6 sm:px-8 py-3 rounded-md shadow-md 
              bg-green-500 overflow-hidden transition-all duration-500 before:absolute before:inset-0 
              before:bg-green-600 before:scale-x-0 before:origin-left hover:before:scale-x-100 
              before:transition-transform before:duration-500"
            >
              Find Talents
            </Link>
          </div>
        </div>

        {/* Image from Public Folder */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img 
            src="/home.webp" 
            alt="Job Search Hero" 
            className="w-full h-80 md:h-96 rounded-md object-cover" 
          />
        </div>
      </div>

      {/* Job Cards Carousel */}
      <div className="mt-12">
        <JobCarousel />
      </div>

      {/* Relationship component */}
      <div className="mt-12">
        <Relationships />
      </div>
    </div>
  );
};

export default Home;
