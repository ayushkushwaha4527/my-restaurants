import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    areaname,
    avgRating,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex-col justify-center items-center m-4 space-y-8">
      {/* Restaurant Info */}
      <div className="flex-col items-center justify-center mx-auto shadow-xl rounded-3xl bg-white p-6 w-full sm:w-10/12 md:w-8/12 lg:w-7/12">
        <h1 className="text-center text-4xl text-[#2c3e50] font-extrabold mb-4 bg-gradient-to-r from-[#FF6F61] to-[#FF3B3F] text-transparent bg-clip-text p-2 rounded-xl">
          {name}
        </h1>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-center font-custom text-xl text-[#7f8c8d] underline hover:underline-offset-4 transition-all duration-300 bg-slate-200 rounded-2xl py-2 px-4">
            {cuisines.join(", ")}
          </h2>
          <h3 className="text-md text-[#95a5a6]">{areaname}</h3>

          <div className="flex justify-center items-center gap-6 bg-slate-100 rounded-2xl p-4 shadow-md">
            <h3 className="text-[#16a085] text-lg font-semibold">{avgRating} ⭐</h3>
            <h3 className="text-[#7f8c8d] text-lg">{totalRatingsString}</h3>
            <h3 className="text-[#7f8c8d]">•</h3>
            <h3 className="text-[#16a085] text-lg">{costForTwoMessage}</h3>
          </div>

          <h3 className="text-center text-md text-[#34495e] bg-slate-200 rounded-2xl p-4 mt-4">
            Delivery in: {sla.slaString}
          </h3>
        </div>
      </div>

      {/* Restaurant Menu Categories */}
      <div className="flex-col items-center justify-center space-y-8 w-full">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            info={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
