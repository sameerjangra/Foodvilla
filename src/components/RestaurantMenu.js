import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import ShimmerMenu from "./ShimmerMenu";
import useOnline from "../utils/useOnline";
import OfflinePage from "./OfflinePage";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";


const IMG_CDN_MENU =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

const RestaurantMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { restaurant, restaurantMenu, loading } = useRestaurant(id);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const offline = useOnline();
  if (!offline) return <OfflinePage />;
  if (loading) return <ShimmerMenu />;

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      {/* Back Button + Restaurant Name */}
      <div className="mb-4 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-xl font-extrabold text-gray-600 hover:text-black transition"
          aria-label="Go Back"
        >
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2 className="text-3xl font-bold text-gray-800">{restaurant?.name}</h2>
      </div>

      {/* Restaurant Info */}
      <div className="rounded-md p-4 shadow-md bg-white mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          {restaurant?.avgRatingString +
            " (" +
            restaurant?.totalRatingsString +
            ")"}{" "}
          {" · "}
          {restaurant?.costForTwoMessage}
        </h3>
        <h3 className="text-gray-600">
          {restaurant?.cuisines?.join(", ") || "Cuisines not available"}
        </h3>
      </div>

      {/* Menu Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-6">Menu</h2>
        {restaurantMenu.length > 0 ? (
          <ul className="space-y-10">
            {restaurantMenu.map((item, index) => (
              <li
                key={index}
                className="flex flex-col lg:flex-row justify-between gap-4 border-b pb-6"
              >
                {/* Text Section */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mt-1">
                    Price: ₹{item.price / 100 || item.defaultPrice / 100 || "N/A"}
                  </p>
                  <p className="text-gray-600 mt-1">
                    Average Rating:{" "}
                    {item.ratings?.aggregatedRating?.rating
                      ? `${item.ratings.aggregatedRating.rating} (${item.ratings.aggregatedRating.ratingCount})`
                      : "No rating yet"}
                  </p>
                  <p className="text-gray-500 mt-2 text-sm">
                    {item.description || "No description available"}
                  </p>
                </div>

                {/* Image + Add Button */}
                <div className="relative w-full sm:w-[200px] h-[220px] md:h-[160px] flex-shrink-0">
                  {item.imageId ? (
                    <img
                      className="h-full w-full object-cover rounded-xl border border-gray-200"
                      src={IMG_CDN_MENU + item.imageId}
                      alt={item.name}
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center border border-gray-200 rounded-xl bg-gray-50 text-gray-400">
                      No Image
                    </div>
                  )}
                  <button
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-md text-sm font-semibold hover:bg-green-600 shadow-md"
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">Menu not available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
