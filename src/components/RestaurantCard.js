import React from "react";
import { CDN_URL } from "../assets/constants";

const RestaurantCard = ({ resData }) => {
  const { info = {} } = resData;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    areaName,
    id,
    cuisines = [],
  } = info;

  const originalCostForTwo = parseFloat(costForTwo.replace(/\D/g, ""));
  const modifiedCostForTwo = originalCostForTwo + 200;

  return (
    <div className="flex flex-col justify-start items-center rounded-3xl bg-white shadow-xl w-[350px] h-[530px] hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200 hover:shadow-2xl relative group overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
        <img
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          alt={name}
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
      </div>

      {/* Restaurant Details */}
      <div className="p-6 w-full space-y-5">
        {/* Restaurant Name and Rating */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800 truncate">{name}</h3>
          <span className="bg-yellow-500 text-white text-sm font-semibold py-1 px-3 rounded-full">
            {avgRating} ⭐
          </span>
        </div>

        {/* Cuisines */}
        <p className="text-sm text-gray-600 mt-2">
          {cuisines.length ? cuisines.join(", ") : "Unknown"}
        </p>

        {/* Price Section */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-400 line-through">
            ₹{modifiedCostForTwo} for Two
          </span>
          <span className="text-lg font-semibold text-green-600">{costForTwo}</span>
        </div>

        {/* Location */}
        <p className="text-sm text-gray-600 mt-2 flex items-center">
          <span className="mr-2 text-lg">📍</span>
          {areaName}
        </p>

        {/* Call to Action */}
        <a
          target="_blank"
          href={`foodiesapp://food/${id}`}
          className="block w-full mt-6 text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2 rounded-xl font-semibold transition-all hover:bg-yellow-600 hover:scale-105 focus:ring-2 focus:ring-yellow-300"
        >
          Visit Restaurant
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;
