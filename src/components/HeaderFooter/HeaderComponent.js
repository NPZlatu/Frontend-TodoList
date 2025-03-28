import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import config from "../../config";

const HeaderComponent = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    if (!access_token || !refresh_token) {
      return;
    }
    axios
      .post(
        `${config.API_BASE_URL}/logout/`,
        {
          refresh: refresh_token,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((response) => {
        console.log(response, "logout response");
        if (
          response.status === 204 ||
          response.status === 200 ||
          response.status === 201
        ) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          setIsAuthenticated(false);
          navigate("/login");
          toast.success("Logout successful", {
            autoClose: config.AUTO_CLOSE_TIME,
          });
        } else {
          toast.error("Logout Failed.", {
            autoClose: config.AUTO_CLOSE_TIME,
          });
        }
      })
      .catch((error) => {
        console.log(error, "logout error");
        toast.error("An error occurred. Please try again.", {
          autoClose: config.AUTO_CLOSE_TIME,
        });
      });
  };

  return (
    <nav className="bg-calm-blue text-white w-full p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold">ToDo App</div>

        <div className="flex space-x-6">
          {!isAuthenticated && (
            <Link
              to="/login"
              className="text-white hover:text-calm-light transition duration-300"
            >
              Login
            </Link>
          )}
          {!isAuthenticated && (
            <Link
              to="/register"
              className="text-white hover:text-calm-light transition duration-300"
            >
              Register
            </Link>
          )}
          {isAuthenticated && (
            <Link
              className="text-white hover:text-calm-light transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
