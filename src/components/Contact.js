import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-[#F9F9F9] to-[#F3F4F6] p-8 md:p-16 rounded-xl shadow-xl max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-[#FF6600] mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center md:text-left">
        Have a question or feedback? We'd love to hear from you! Feel free to reach out to us using any of the methods below:
      </p>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#333333] mb-2">Email:</h2>
        <p className="text-lg text-gray-800 hover:text-[#FF6600] cursor-pointer">
          ayushkushwaha97291@gmail.com
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#333333] mb-2">Phone:</h2>
        <p className="text-lg text-gray-800 hover:text-[#FF6600] cursor-pointer">
          xxxxx2206
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#333333] mb-2">Address:</h2>
        <p className="text-lg text-gray-800">
          Kanpur nagar<br />
           <br />
          Uttar Pradesh,209214
        </p>
      </div>
      
      <p className="text-lg text-gray-800 text-center md:text-left">
        We're here to assist you with any inquiries or concerns. Don't hesitate to get in touch with us! Thank you for choosing Us!.
      </p>
      
      {/* Optional Contact Form Section */}
      <div className="mt-10 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-[#333333] mb-4">Or Send Us a Message</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
            rows="4"
          />
          <button
            type="submit"
            className="bg-[#FF6600] text-white font-semibold py-3 px-6 rounded-md transition-transform duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
