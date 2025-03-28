import React from "react";

const RegisterComponent = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (register the user)
  };

  return (
    <div className="flex flex-col justify-between bg-gradient-to-t from-blue-50 via-green-50 pt-6">
      {/* Register Form */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h3 className="text-center text-calm-blue text-3xl font-semibold mb-6">Create an Account</h3>

          <form onSubmit={handleFormSubmit}>
            <div className="mb-5">
              <label htmlFor="username" className="block text-sm mb-2 text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-calm-blue transition"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-calm-blue transition"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm mb-2 text-gray-700">Password</label>
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
              Register
            </button>
          </form>

          <div className="text-center mt-4 text-gray-600">
            <p>Already have an account? <button className="font-semibold text-calm-blue hover:underline">Login</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
