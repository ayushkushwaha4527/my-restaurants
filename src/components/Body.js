import React, { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [searchText, setsearchText] = useState("");
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-3xl text-red-500 font-bold">
          Looks like you are offline, please check your internet connection.
        </h1>
      </div>
    );

  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="container mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <div className="w-full md:w-1/2 flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for a restaurant..."
              className="w-full py-3 px-4 rounded-lg text-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              onClick={() => {
                const filteredRestaurant = ListOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="bg-yellow-400 text-gray-800 text-lg font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>

        {/* Restaurant Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info?.id}
              to={"/restaurants/" + restaurant.info?.id}
              className="group"
            >
              <RestaurantCard resData={restaurant} />
              <div className="mt-2 text-center text-gray-700 group-hover:text-gray-900 transition duration-200">
                <p className="text-lg font-semibold">{restaurant.info?.name}</p>
                <p className="text-sm text-gray-500">{restaurant.info?.locality}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
