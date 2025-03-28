import React from "react";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (authentication)
  };

  return (
    <div className="flex flex-col justify-between bg-gradient-to-t from-blue-50 via-green-50 pt-6">
      {/* Login Form */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h3 className="text-center text-calm-blue text-3xl font-semibold mb-6">
            Login to Your Account
          </h3>

          <form onSubmit={handleFormSubmit}>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block text-sm mb-2 text-gray-700"
              >
                Username
              </label>
              <input
                type="username"
                id="username"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-calm-blue transition"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-calm-blue transition"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-calm-blue text-white py-3 rounded-lg hover:bg-calm-blue-dark transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4 text-gray-600">
            <p>
              Don't have an account? &nbsp;
              <button
                onClick={() => navigate("/register")}
                className="font-semibold text-calm-blue hover:underline"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
