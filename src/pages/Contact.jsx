import { useState } from "react";
import API from "../../api/axiosInstance"; // Import Axios instance

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage("Please fill out all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await API.post("/contact", formData);
      setResponseMessage(response.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contact Us Section */}
      <section className="w-full bg-gray-100 py-24 px-8 md:px-20 min-h-[60vh] flex items-start">
        <div className="max-w-6xl w-full">
          {/* Breadcrumb Navigation */}
          <div className="text-gray-600 text-lg">
            <span className="text-blue-600 font-semibold">Home</span> / Contact Us
          </div>

          {/* Contact Us Title */}
          <h2 className="text-7xl font-extrabold text-gray-900 mt-2 relative inline-block">
            Contact Us
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-600"></span>
          </h2>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="w-full py-16 px-8 md:px-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-900">
            Let’s Connect and Build Your Future!
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            Looking for the perfect job or searching for top talent?  
            We’re here to help! Reach out to us, and let’s make career dreams a reality.
          </p>
        </div>

        {/* Right Side Contact Form */}
        <div className="md:w-1/2 bg-white p-8 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we assist you?"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Response Message */}
            {responseMessage && (
              <p className={`text-lg font-medium ${responseMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
                {responseMessage}
              </p>
            )}

            {/* Send Message Button */}
            <button
              type="submit"
              className="relative text-white text-xl font-semibold px-8 py-3 rounded-md shadow-md bg-blue-600 overflow-hidden transition-all duration-500 
                before:absolute before:inset-0 before:bg-blue-700 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-500"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
