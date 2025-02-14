import React, { useContext, useState } from "react";
import "../input.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginButtonText, setLoginButtonText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext); // Context for user
  const cartItems = useSelector((store) => store.cart.items); // Redux cart items

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGDIfUJSHP20Kw2YK_DTmqnDhHoJeLpGZYQ&s" alt="App logo" className="w-24" />
          <Link to="/" className="text-lg font-bold text-[#FF6600] hover:text-[#FF4500]">
            <span className="text-lg">Foodie</span> App
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-[#FF6600] transition duration-300">Home</Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-[#FF6600] transition duration-300">About Us</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-[#FF6600] transition duration-300">Contact Us</Link>
          <Link to="/cart" className="text-sm font-medium text-gray-700 hover:text-[#FF6600] transition duration-300">
            Cart ({cartItems.length} item{cartItems.length !== 1 && "s"})
          </Link>
        </div>

        {/* Login/Logout Button */}
        <div className="flex items-center space-x-3">
          <button
            className="bg-[#FF6600] text-white py-2 px-4 rounded-lg hover:bg-[#FF4500] transition duration-300 text-sm"
            onClick={() => setLoginButtonText(loginButtonText === "Login" ? "Logout" : "Login")}
          >
            {loginButtonText}
          </button>
          {loggedInUser && (
            <div className="text-sm text-gray-600">
              Ordering for: <span className="font-semibold">{loggedInUser}</span>
            </div>
          )}
        </div>
      </div>

      {/* Online Status and Footer */}
      <div className="bg-[#F9F9F9] py-1 text-center text-sm text-gray-500">
        <div>
          Active Status: <span className={onlineStatus ? "text-green-500" : "text-red-500"}>{onlineStatus ? "✅" : "🚫"}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
