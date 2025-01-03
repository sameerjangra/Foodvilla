import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import useRestaurant from "../utils/useRestaurant";
import ShimmerMenu from "./ShimmerMenu";
import useOnline from "../utils/useOnline";
import OfflinePage from "./OfflinePage";

const IMG_CDN_MENU = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"
const RestaurantMenu = () => {
  const { id } = useParams();
const {restaurant,restaurantMenu,loading} = useRestaurant(id)

const offline = useOnline();
if(!offline) {
    return <OfflinePage />
}
if (loading) {
  return <ShimmerMenu />;
}


  return (
    <div className="h-full w-[60%] ml-72 mt-16">
      <div>
        {/* <h3>RestaurantMenu id: {id}</h3> */}
        <h2 className="text-2xl">{restaurant?.name}</h2>
      </div>
      <div className="h-26 w-full rounded-md p-3  shadow-xl">
        <div className="h-20 w-full rounded-md p-2 border-gray-200 border-2">
        <h3>
          {restaurant?.avgRatingString +
            " (" +
            restaurant?.totalRatingsString +
            ")"}{" · "}
          {restaurant?.costForTwoMessage}
        </h3>
        <h3>
          {restaurant?.cuisines
            ? restaurant?.cuisines.join(" , ")
            : "Cuisines not available"}
        </h3>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold border-b-2 border-gray-200 pl-1">Menu</h2>
        {restaurantMenu.length > 0 ? (
          <ul>
            {restaurantMenu?.map((item, index) => (
              <li key={index} className="flex justify-between mt-5 border-b-2 border-gray-200 ">
                <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
          
                <p>
                  Price: ₹
                  {item.price / 100 || item.defaultPrice / 100 || "N/A"}
                </p>
                <p>
                  Average Rating:{" "}
                  {item.ratings?.aggregatedRating?.rating +
                    " (" +
                    item.ratings?.aggregatedRating?.ratingCount +
                    " )" || "No rating yet"}
                </p>
                <p className="w-[650px]">{item.description || "No description available"}</p>
                </div>
                <div className="bg-cover">
  <img 
    className="float-left h-[150px] w-[150px] p-3 -mt-5 rounded-2xl object-cover" 
    src={IMG_CDN_MENU + item.imageId} 
    alt="Menu item" 
  />
</div>

              </li>
            ))}
          </ul>
        ) : (
          <p>Menu not available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
