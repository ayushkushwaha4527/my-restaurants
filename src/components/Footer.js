import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/ayush-kushwaha-288974275/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-200 text-3xl"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/ayushkushwaha4527"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-200 text-3xl"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.instagram.com/ayushkushwaha4527/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-200 text-3xl"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>

          {/* Contact Section */}
          <div className="text-center text-gray-300">
            <h3 className="text-xl font-semibold mb-2">Created by: Ayush Kushwaha</h3>
            <p className="text-sm">Contact: <a href="ayushkushwaha97291@gmail.com" className="hover:text-yellow-400">ayushkushwaha97291@gmail.com</a></p>
            <p className="mt-2 text-sm">&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
