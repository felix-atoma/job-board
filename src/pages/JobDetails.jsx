import { useParams } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";

const jobs = [
  { id: 1, title: "Frontend Developer", type: "Remote", description: "Build modern UI components using React & Tailwind." },
  { id: 2, title: "Backend Engineer", type: "On-Site", description: "Develop scalable APIs with Node.js & Express." },
  { id: 3, title: "UI/UX Designer", type: "Remote", description: "Create intuitive designs using Figma & Adobe XD." },
  { id: 4, title: "Data Analyst", type: "On-Site", description: "Analyze business data using Python & SQL." },
  { id: 5, title: "Cybersecurity Expert", type: "Remote", description: "Ensure data security and prevent breaches." },
  { id: 6, title: "DevOps Engineer", type: "Remote", description: "Manage CI/CD pipelines and cloud infrastructure." },
  { id: 7, title: "Product Manager", type: "On-Site", description: "Lead product development and roadmaps." },
  { id: 8, title: "Mobile App Developer", type: "Remote", description: "Develop cross-platform apps with Flutter." },
  { id: 9, title: "AI Engineer", type: "On-Site", description: "Build machine learning models for automation." },
  { id: 10, title: "Marketing Specialist", type: "Remote", description: "Plan and execute digital marketing strategies." },
];

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <h2 className="text-center text-red-500 font-bold text-2xl">Job not found</h2>;
  }

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <FaBriefcase className="text-5xl text-blue-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800">{job.title}</h2>
        <span className={`inline-block mt-2 px-4 py-1 rounded-full text-white text-lg ${job.type === "Remote" ? "bg-green-500" : "bg-red-500"}`}>
          {job.type}
        </span>
        <p className="text-gray-600 mt-4 text-lg">{job.description}</p>
      </div>
    </section>
  );
};

export default JobDetail;
