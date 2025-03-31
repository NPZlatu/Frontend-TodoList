import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import config from "../../config";

const LoginComponent = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${config.API_BASE_URL}/login/`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);
          setIsAuthenticated(true);
          navigate("/dashboard");
          toast.success("Login successful", {
            autoClose: config.AUTO_CLOSE_TIME,
          });
        } else {
          toast.error("Login Failed.", {
            autoClose: config.AUTO_CLOSE_TIME,
          });
        }
      })
      .catch((error) => {
        console.log(error, "login error");
        /** Validations */
        toast.error("Invalid Credentials.", {
          autoClose: config.AUTO_CLOSE_TIME,
        });
      });
  };

  return (
    <div className="flex flex-col justify-between bg-gradient-to-t from-blue-50 via-green-50 pt-6">
      {/* Login Form */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h3 className="text-center text-calm-blue text-3xl font-semibold mb-6">
            Login to Your Account - UPDATED
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
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-calm-blue transition"
                placeholder="Enter your username"
                required
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
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-calm-blue transition"
                placeholder="Enter your password"
                required
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
