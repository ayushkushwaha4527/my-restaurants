import React from "react";
import { useDispatch } from "react-redux";
import { ITEM_API } from "../assets/constants";
import vegLogo from "../assets/veg-icon.webp";
import nonVegLogo from "../assets/nonVeg-icon.webp";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-8">
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="relative bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between p-6 space-x-6">
            <div className="w-9/12">
              <div className="flex items-center space-x-2">
                <img
                  className="w-5 h-5"
                  src={item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? vegLogo : nonVegLogo}
                  alt="Veg/Non-Veg"
                />
                <h2 className="text-2xl font-semibold text-gray-800">{item.card?.info?.name}</h2>
              </div>
              <div className="flex gap-3 mt-2">
                <span className="text-gray-500 line-through text-lg">
                  ₹
                  {((item.card?.info?.price || item.card?.info?.defaultPrice) / 100 + 100).toFixed(2)}
                </span>
                <span className="text-lg font-semibold text-green-600">
                  ₹{((item.card?.info?.price || item.card?.info?.defaultPrice) / 100).toFixed(2)}
                </span>
              </div>
              <p className="mt-2 text-gray-600 text-sm">{item?.card?.info?.description}</p>
            </div>
            <div className="relative flex-shrink-0">
              <img
                className="w-36 h-36 object-cover rounded-lg"
                src={ITEM_API + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
              <button
                className="absolute bottom-4 right-4 bg-yellow-400 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-500 focus:outline-none transition-all duration-300"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
