import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axiosInstance";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", credentials);
      localStorage.setItem("token", response.data.token);
      setMessage("Login successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <section className="w-full bg-gray-100 py-24 px-8 md:px-20 min-h-[60vh] flex items-start">
        <div className="max-w-6xl w-full">
          {/* Breadcrumb Navigation - Aligned to Top Left */}
          <div className="text-gray-600 text-lg">
            <span className="text-blue-600 font-semibold">Home</span> / Login
          </div>

          {/* Login Title - Bigger Size */}
          <h2 className="text-7xl font-extrabold text-gray-900 mt-2 relative inline-block">
            Login
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-600"></span>
          </h2>
        </div>
      </section>

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 shadow-lg rounded-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <p className="text-gray-600 text-center mb-6">
            Enter your details to access your account
          </p>

          {message && (
            <div
              className={`text-center mb-4 p-2 rounded ${
                message.includes("successful")
                  ? "text-green-600 bg-green-100"
                  : "text-red-600 bg-red-100"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
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

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="mr-2"
                  onChange={handleChange}
                />
                Keep me logged in
              </label>
              <Link to="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign Up here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
