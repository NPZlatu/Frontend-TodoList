import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-calm-blue text-white text-center py-4 mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Niraj Paudel. Auckland Institute of Studies. Student ID: 20241485
      </p>
    </footer>
  );
};

export default Footer;
