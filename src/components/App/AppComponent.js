import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "../HeaderFooter/HeaderComponent";
import FooterComponent from "../HeaderFooter/FooterComponent";
import LoginComponent from "../Auth/LoginComponent";
import RegisterComponent from "../Auth/RegisterComponent";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <HeaderComponent />
        <ToastContainer />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
