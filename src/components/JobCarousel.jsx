import { FaBriefcase } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

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

const JobCarousel = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-extrabold text-gray-800">1000+</h2>
        <h3 className="text-3xl font-bold text-blue-600">Browse From Our Top Jobs</h3>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Kickstart your career with ease! Discover top job opportunities that match your skills and aspirations—your dream job is just a click away.
        </p>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="max-w-6xl mx-auto px-6"
      >
        {jobs.map((job) => (
          <SwiperSlide key={job.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaBriefcase className="text-4xl text-blue-500 mx-auto mb-4" />
              <h4 className="text-2xl font-semibold text-gray-800">{job.title}</h4>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-white text-sm ${job.type === "Remote" ? "bg-green-500" : "bg-red-500"}`}>
                {job.type}
              </span>
              <p className="text-gray-600 mt-3">{job.description}</p>
              <button
                onClick={() => navigate(`/job/${job.id}`)}
                className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all"
              >
                Apply Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default JobCarousel;
