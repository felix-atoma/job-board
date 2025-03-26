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
    <div>
      {/* Contact Us Section */}
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
      
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Find Your Dream Job</h1>
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-2">Filter Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <input type="text" name="title" placeholder="Job Title" className="p-2 border rounded" onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" className="p-2 border rounded" onChange={handleChange} />
            <select name="type" className="p-2 border rounded" onChange={handleChange}>
              <option value="">Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
            <input type="date" name="deadline" className="p-2 border rounded" onChange={handleChange} />
            <input type="text" name="keyword" placeholder="Keyword" className="p-2 border rounded" onChange={handleChange} />
          </div>
        </div>
        <div>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white p-4 shadow rounded-md mb-4">
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.location} | {job.type}</p>
                <p className="text-sm text-gray-500">Deadline: {job.deadline}</p>
                <button 
                  onClick={() => handleApply(job.id)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;
