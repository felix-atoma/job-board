import { useState } from "react";
import { useParams } from "react-router-dom";
import jobData from "../data/jobs.json";

const ApplyForm = () => {
  const { jobId } = useParams();
  const job = jobData.find((job) => job.id === parseInt(jobId));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    cv: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, cv: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
    alert("Application submitted successfully!");
  };

  if (!job) {
    return <p className="text-center text-red-500">Job not found</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Job Details Section */}
      <div className="mb-6 p-6 border rounded bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
        <p className="text-gray-600">{job.location}</p>
        <p className="text-gray-500 font-semibold">{job.type}</p>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Job Description</h2>
          <p className="text-gray-700">{job.description}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Responsibilities</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Qualifications</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {job.qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Benefits</h2>
          <p className="text-gray-700">{job.benefits}</p>
        </div>
      </div>

      {/* Application Form */}
      <h2 className="text-2xl font-bold mb-4">Apply for the Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="url" name="portfolio" placeholder="Website/Portfolio Link" className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="file" name="cv" required className="w-full p-2 border rounded" onChange={handleFileChange} />
        <textarea name="coverLetter" placeholder="Cover Letter" required className="w-full p-2 border rounded" onChange={handleChange}></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Apply Now</button>
      </form>
    </div>
  );
};

export default ApplyForm;
