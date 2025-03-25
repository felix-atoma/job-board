import { useLocation, useParams, useNavigate } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";

const JobDetails = () => {
  const { id } = useParams(); // Get job ID from URL
  const location = useLocation();
  const navigate = useNavigate();

  // Use the state from navigation or fetch data based on ID
  const job = location.state;

  if (!job) {
    return <p className="text-center text-red-500 text-lg">Job not found!</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <FaBriefcase className="text-6xl text-blue-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
        <p className="text-gray-600 mt-2">{job.location}</p>
        <span className={`mt-2 px-3 py-1 rounded-full text-white text-sm ${
          job.type === "Full-time" ? "bg-green-500" : "bg-orange-500"
        }`}>
          {job.type}
        </span>
        <p className="text-gray-600 mt-4">{job.description}</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition-all"
        >
          Back to Jobs
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
