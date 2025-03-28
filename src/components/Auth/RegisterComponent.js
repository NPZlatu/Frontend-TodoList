import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import config from "../../config";

const RegisterComponent = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${config.API_BASE_URL}/register/`, {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Account created successfully. Please login.", {
            autoClose: config.AUTO_CLOSE_TIME,
          });
          navigate("/login");
        } else {
          toast.error("An error occurred. Please try again.", {
            autoClose: config.AUTO_CLOSE_TIME,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        toast.error(
          error.response.data.username
            ? error.response.data.username[0]
            : "An error occurred. Please try again.",
          {
            autoClose: config.AUTO_CLOSE_TIME,
          }
        );
      });
  };

  return (
    <div className="flex flex-col justify-between bg-gradient-to-t from-blue-50 via-green-50 pt-6">
      {/* Register Form */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h3 className="text-center text-calm-blue text-3xl font-semibold mb-6">
            Create an Account
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
                type="text"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                id="username"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-calm-blue transition"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm mb-2 text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                id="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-calm-blue transition"
                placeholder="Enter your email"
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
                onChange={(event) => setPassword(event.target.value)}
                value={password}
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
            <p>
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="font-semibold text-calm-blue hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
