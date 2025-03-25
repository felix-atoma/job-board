import { FaBriefcase } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    location: "📍 Accra, Ghana",
    type: "Full-time",
    description: "Develop and maintain web applications using modern frameworks.",
  },
  {
    id: 2,
    title: "Agricultural Extension Officer",
    location: "📍 Kumasi, Ghana",
    type: "Contract",
    description: "Support farmers with modern agricultural practices and training.",
  },
  {
    id: 3,
    title: "Marketing Executive",
    location: "📍 Takoradi, Ghana",
    type: "Part-time",
    description: "Promote brand awareness and execute marketing campaigns.",
  },
  {
    id: 4,
    title: "Bank Teller",
    location: "📍 Tamale, Ghana",
    type: "Full-time",
    description: "Handle daily banking transactions and assist customers.",
  },
  {
    id: 5,
    title: "Construction Site Supervisor",
    location: "📍 Sunyani, Ghana",
    type: "Contract",
    description: "Oversee construction projects and ensure compliance with safety standards.",
  },
  {
    id: 6,
    title: "Customer Service Representative",
    location: "📍 Cape Coast, Ghana",
    type: "Full-time",
    description: "Assist clients and resolve customer complaints effectively.",
  },
  {
    id: 7,
    title: "Data Analyst",
    location: "📍 Accra, Ghana",
    type: "Full-time",
    description: "Analyze complex datasets and provide actionable insights.",
  },
  {
    id: 8,
    title: "Human Resource Manager",
    location: "📍 Accra, Ghana",
    type: "Full-time",
    description: "Oversee recruitment, training, and employee relations.",
  },
  {
    id: 9,
    title: "Graphic Designer",
    location: "📍 Tema, Ghana",
    type: "Freelance",
    description: "Create visual designs for branding and marketing materials.",
  },
  {
    id: 10,
    title: "Sales Representative",
    location: "📍 Ho, Ghana",
    type: "Full-time",
    description: "Drive sales and build strong customer relationships.",
  },
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
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-full">
              <div className="flex-grow">
                <FaBriefcase className="text-4xl text-blue-500 mx-auto mb-4" />
                <h4 className="text-2xl font-semibold text-gray-800">{job.title}</h4>
                <p className="text-gray-600">{job.location}</p>
                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-white text-sm ${
                    job.type === "Full-time"
                      ? "bg-green-500"
                      : job.type === "Contract"
                      ? "bg-orange-500"
                      : "bg-gray-500"
                  }`}
                >
                  {job.type}
                </span>
                <p className="text-gray-600 mt-3">{job.description}</p>
              </div>
              <button
                onClick={() => navigate(`/job/${job.id}`, { state: job })}
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