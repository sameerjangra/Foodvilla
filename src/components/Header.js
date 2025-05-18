import { useState } from "react";
import LOGOURL from "../assets/img/logo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faPhone,
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Title = () => (
  <Link to="/" className="flex items-center space-x-2 -ml-5">
    <img
      data-testid="logo"
      className="h-12 md:h-20 rounded-full p-1"
      alt="logo"
      src={LOGOURL}
    />
    <h3 className="text-base md:text-2xl font-bold">
      Food
      <span className="text-orange-500 rounded-md">Villa</span>
    </h3>
  </Link>
);

const HeadingComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center md:m-3  m-2 px-4 shadow-xl">
      <Title />
      <ul className="flex items-center space-x-4 md:space-x-6">
        {/* Home */}
        <li className="hover:text-orange-700">
          <Link to="/" className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faHome} />
            <span className="hidden md:inline">Home</span>
          </Link>
        </li>

        {/* About */}
        <li className="hover:text-orange-700">
          <Link to="/about" className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span className="hidden md:inline">About</span>
          </Link>
        </li>

        {/* Contact */}
        <li className="hover:text-orange-700">
          <Link to="/contact" className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faPhone} />
            <span className="hidden md:inline">Contact</span>
          </Link>
        </li>

        {/* Instamart
        <li className="hover:text-orange-700">
          <Link to="/instamart" className="flex items-center space-x-1">
            <span className="hidden md:inline">Instamart</span>
          </Link>
        </li> */}

        {/* Cart */}
        <li className="relative hover:text-orange-700">
          <Link to="/cart" className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="hidden md:inline">Cart</span>
          </Link>
          {cartItems.length > 0 && (
            <span
              className="absolute top-[-8px] right-[-10px] bg-red-500 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center"
              title="Cart Items"
            >
              {cartItems.length}
            </span>
          )}
        </li>

        {/* Login / Logout
        {isLoggedIn ? (
          <li
            className="hover:text-orange-700 cursor-pointer flex items-center space-x-1"
            onClick={() => setIsLoggedIn(false)}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="hidden md:inline">Logout</span>
          </li>
        ) : (
          <li
            className="hover:text-orange-700 cursor-pointer flex items-center space-x-1"
            onClick={() => setIsLoggedIn(true)}
          >
            <FontAwesomeIcon icon={faSignInAlt} />
            <span className="hidden md:inline">Login</span>
          </li>
        )} */}
      </ul>
    </div>
  );
};

export default HeadingComponent;
