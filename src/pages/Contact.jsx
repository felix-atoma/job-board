const Contact = () => {
  return (
    <>
      {/* Contact Us Section */}
      <section className="w-full bg-gray-100 py-24 px-8 md:px-20 min-h-[60vh] flex items-start">
        <div className="max-w-6xl w-full">
          {/* Breadcrumb Navigation - Aligned to Top Left */}
          <div className="text-gray-600 text-lg">
            <span className="text-blue-600 font-semibold">Home</span> / Contact Us
          </div>

          {/* Contact Us Title - Bigger Size */}
          <h2 className="text-7xl font-extrabold text-gray-900 mt-2 relative inline-block">
            Contact Us
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-600"></span>
          </h2>
        </div>
      </section>

      {/* Contact Section */}
      <div className="w-full  py-16 px-8 md:px-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-900">
            Let’s Connect and Build Your Future!
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            Looking for the perfect job or searching for top talent?  
            We’re here to help! Our job board connects job seekers with the  
            best opportunities while helping businesses find the right candidates.  
            Reach out to us with your inquiries, and let’s make career dreams a reality.
          </p>
        </div>

        {/* Right Side Contact Form */}
        <div className="md:w-1/2 bg-white p-8 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="How can we assist you?"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Send Message Button */}
            <button
              type="submit"
              className="relative text-white text-xl font-semibold px-8 py-3 rounded-md shadow-md bg-blue-600 overflow-hidden transition-all duration-500 
                before:absolute before:inset-0 before:bg-blue-700 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
