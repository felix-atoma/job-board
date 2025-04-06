import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axiosInstance";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("API Base URL:", API.defaults.baseURL);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const { confirmPassword, ...submitData } = formData;
      const response = await API.post("/auth/register", submitData, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage(response.data.message || "Registration successful!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Registration failed. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            <p className="text-white mt-2">Processing...</p>
          </div>
        </div>
      )}

      <section className="w-full bg-gray-100 py-24 px-8 md:px-20 min-h-[60vh] flex items-start">
        <div className="max-w-6xl w-full">
          <div className="text-gray-600 text-lg">
            <span className="text-blue-600 font-semibold">Home</span> / Register
          </div>
          <h2 className="text-7xl font-extrabold text-gray-900 mt-2 relative inline-block">
            Register with us
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-600"></span>
          </h2>
        </div>
      </section>

      <div className="flex items-center justify-center min-h-[50vh] bg-gray-50 py-12 px-4">
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          <p className="text-gray-600 text-center mb-6">
            Create an account to get started
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-center">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded text-center">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password (min 6 characters)"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                onChange={handleChange}
                value={formData.password}
                required
                minLength="6"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                onChange={handleChange}
                value={formData.confirmPassword}
                required
                minLength="6"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-md text-white font-medium transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
