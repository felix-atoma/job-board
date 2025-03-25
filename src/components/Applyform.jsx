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

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Apply for the Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="url" name="portfolio" placeholder="Website/Portfolio Link" className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="file" name="cv" required className="w-full p-2 border rounded" onChange={handleFileChange} />
        <textarea name="coverLetter" placeholder="Cover Letter" required className="w-full p-2 border rounded" onChange={handleChange}></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Apply Now</button>
      </form>

      {job && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold">Job Summary</h2>
          <p><strong>Published on:</strong> {job.publishedDate}</p>
          <p><strong>Vacancy:</strong> {job.vacancy} Position(s)</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Job Nature:</strong> {job.type}</p>
        </div>
      )}
    </div>
  );
};

export default ApplyForm;
