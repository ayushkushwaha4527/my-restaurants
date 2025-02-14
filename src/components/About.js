import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-[#F9F9F9] to-[#F3F4F6] p-8 md:p-16 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-[#FF6600] mb-6 text-center">
        About Us - Culinary Delights
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center md:text-left">
        Welcome to Culinary Delights, your go-to place for an unforgettable dining experience. We specialize in delivering gourmet meals straight to your door, crafted by passionate chefs who love bringing delicious flavors to life.
      </p>
      <div>
        <h2 className="text-2xl font-semibold text-[#333333] mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 mb-6">
          Culinary Delights started with a vision to elevate the food delivery experience. We wanted to offer more than just takeout – we wanted to offer an experience that brings fine dining to your home. Our team of talented chefs create exquisite dishes that make every meal feel special.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#333333] mb-4">What Sets Us Apart</h2>
        <p className="text-lg text-gray-700 mb-6">
          What makes us unique is our commitment to culinary excellence. Our chefs bring creativity, passion, and diverse expertise to every dish they create. Whether it's reinventing classic comfort foods or exploring new culinary horizons, we ensure every bite is a masterpiece.
        </p>

        <h2 className="text-2xl font-semibold text-[#333333] mb-4">Our Commitment to Quality</h2>
        <p className="text-lg text-gray-700 mb-6">
          At Culinary Delights, quality is non-negotiable. We work with the finest ingredients, ensuring that each dish is fresh, flavorful, and sustainably sourced. From locally grown vegetables to premium meats and unique spices, we bring the best to your table, every time.
        </p>

        <h2 className="text-2xl font-semibold text-[#333333] mb-4">Community and Sustainability</h2>
        <p className="text-lg text-gray-700 mb-6">
          We're deeply committed to supporting our community and minimizing our environmental impact. By partnering with local farmers and suppliers, we support local businesses and reduce our carbon footprint. We're also dedicated to using eco-friendly packaging and minimizing food waste.
        </p>

        <h2 className="text-2xl font-semibold text-[#333333] mb-4">Your Culinary Journey Starts Here</h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether you're celebrating a special occasion or enjoying a quiet evening at home, Culinary Delights brings you the best of both worlds – delicious meals crafted with care and convenience delivered straight to your doorstep.
        </p>

        <p className="text-lg text-gray-700">
          Thank you for choosing Culinary Delights. We look forward to taking you on a flavorful journey that will leave you craving more. Bon appétit!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
