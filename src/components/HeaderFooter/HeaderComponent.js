import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <nav className="bg-calm-blue text-white w-full p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold">
          ToDo App
        </div>

        <div className="flex space-x-6">
          <Link to="/login" className="text-white hover:text-calm-light transition duration-300">Login</Link>
          <Link to="/register" className="text-white hover:text-calm-light transition duration-300">Register</Link>
          <Link to="/dashboard" className="text-white hover:text-calm-light transition duration-300">Dashboard</Link>
          <Link to="/logout" className="text-white hover:text-calm-light transition duration-300">Logout</Link>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
