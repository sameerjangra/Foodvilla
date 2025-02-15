import { useState} from "react";
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
  <>
    <a href="/" className="flex">
      <img data-testid="logo" className="h-20 rounded-full p-2" alt="logo" src={LOGOURL}></img>
      <h3 className="self-center text-2xl font-bold">Food<span className="text-orange-500 rounded-md">Villa </span></h3>
    </a>
  </>
);

const HeadingComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between m-3 shadow-xl">
      <Title />
      <div className="justify-between m-2 p-4">
        <ul className="flex items-center space-x-6">
          <span className="font-bold text-red-700 text-xl"></span>
          <li className="hover:text-orange-700">
            <Link to="/" className="no-underline">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li className="hover:text-orange-700">
            <Link to="/about" className="no-underline">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </Link>
          </li>
          <li className="hover:text-orange-700">
            <Link to="/contact" className="no-underline">
              <FontAwesomeIcon icon={faPhone} /> Contact Us
            </Link>
          </li>
          <li className="hover:text-orange-700">
            <Link to="/instamart" className="no-underline">
              Instamart
            </Link>
          </li>
          <li className="relative hover:text-orange-700">
            <Link to="/cart" className="no-underline">
              <FontAwesomeIcon icon={faShoppingCart} /> 
            </Link>
            {cartItems.length > 0 && (
              <span
                className="absolute top-[-8px] right-[-16px] bg-red-500 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center"
                title="Cart Items"
              >
                {cartItems.length}
              </span>
            )}
          </li>
          {isLoggedIn ? (
            <li
              className="hover:text-orange-700 cursor-pointer"
              onClick={() => setIsLoggedIn(false)}
            >
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </li>
          ) : (
            <li
              className="hover:text-orange-700 cursor-pointer"
              onClick={() => setIsLoggedIn(true)}
            >
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeadingComponent;
