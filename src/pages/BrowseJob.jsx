import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jobData from "../data/jobs.json"; // Mock job data

const BrowseJobs = () => {
  const [filters, setFilters] = useState({ title: "", location: "", type: "", deadline: "", keyword: "" });
  const [filteredJobs, setFilteredJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = jobData.filter((job) =>
      Object.entries(filters).every(([key, value]) => {
        if (value === "") return true;
        if (key === "keyword") {
          return (
            job.title.toLowerCase().includes(value.toLowerCase()) ||
            job.location.toLowerCase().includes(value.toLowerCase()) ||
            job.type.toLowerCase().includes(value.toLowerCase()) ||
            job.description.toLowerCase().includes(value.toLowerCase())
          );
        }
        return job[key].toLowerCase().includes(value.toLowerCase());
      })
    );
    setFilteredJobs(filtered);
  }, [filters]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApply = (jobId) => {
    navigate(`/job/${jobId}/apply`);
  };

  return (
    <div className="w-full">
      {/* Banner Section */}
      <section className="w-full bg-gray-100 py-24 px-8 md:px-20 min-h-[60vh] flex items-start">
        <div className="max-w-6xl w-full">
          <div className="text-gray-600 text-lg">
            <span className="text-blue-600 font-semibold">Home</span> / Browse
          </div>
          <h2 className="text-7xl font-extrabold text-gray-900 mt-2 relative inline-block">
            Browse jobs
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-600"></span>
          </h2>
        </div>
      </section>

      {/* Filters & Job Listing */}
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Find Your Dream Job</h1>

        {/* Filters */}
        <div className="bg-gray-100 p-4 rounded-md mb-8">
          <h2 className="text-lg font-semibold mb-3">Filter Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <input type="text" name="title" placeholder="Job Title" className="p-2 border rounded w-full" onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" className="p-2 border rounded w-full" onChange={handleChange} />
            <select name="type" className="p-2 border rounded w-full" onChange={handleChange}>
              <option value="">Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
            </select>
            <input type="date" name="deadline" className="p-2 border rounded w-full" onChange={handleChange} />
            <input type="text" name="keyword" placeholder="Keyword" className="p-2 border rounded w-full" onChange={handleChange} />
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-full"
              >
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
                  <p className="text-gray-600 mt-1">{job.location} | {job.type}</p>
                  <p className="text-sm text-gray-500 mt-2">Deadline: {job.deadline}</p>
                  <p className="mt-3 text-gray-700 text-sm line-clamp-3">{job.description}</p>
                </div>
                <button
                  onClick={() => handleApply(job.id)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;
