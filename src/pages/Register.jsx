import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Registering with:", formData);
  };

  return (
    <>
      <section className="w-full bg-gray-100 py-24 px-8 md:px-20 min-h-[60vh] flex items-start">
        <div className="max-w-6xl w-full">
          {/* Breadcrumb Navigation - Aligned to Top Left */}
          <div className="text-gray-600 text-lg">
            <span className="text-blue-600 font-semibold">Home</span> / Register
          </div>

          {/* Contact Us Title - Bigger Size */}
          <h2 className="text-7xl font-extrabold text-gray-900 mt-2 relative inline-block">
            Register with us 
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-600"></span>
          </h2>
        </div>
      </section>

      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-white p-8 shadow-lg rounded-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          <p className="text-gray-600 text-center mb-6">Create an account to get started</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                className="w-full p-2 border rounded mt-1"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="w-full p-2 border rounded mt-1"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="w-full p-2 border rounded mt-1"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-2 border rounded mt-1"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
