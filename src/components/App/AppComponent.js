import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HeaderComponent from "../HeaderFooter/HeaderComponent";
import FooterComponent from "../HeaderFooter/FooterComponent";
import LoginComponent from "../Auth/LoginComponent";
import RegisterComponent from "../Auth/RegisterComponent";
import TodoListComponent from "../Todo/ListComponent";
import { ToastContainer } from "react-toastify";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <HeaderComponent
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <ToastContainer />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <LoginComponent setIsAuthenticated={setIsAuthenticated} />
              }
            />
            <Route
              path="/login"
              element={
                <LoginComponent setIsAuthenticated={setIsAuthenticated} />
              }
            />
            <Route path="/register" element={<RegisterComponent />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <TodoListComponent />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
