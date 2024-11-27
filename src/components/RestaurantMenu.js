import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ShimmerMenu from "./ShimmerMenu";

const IMG_CDN_MENU = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"
const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurants] = useState({});
  const [restaurantMenu, setRestaurantsMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    setLoading(true);
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.1491875&lng=75.7216527&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER#data/cards/4/groupedCard/cardGroupMap/REGULAR/cards/2/card/card/itemCards/0/card/info`
      );
      const json = await data.json();
      setRestaurants(json?.data?.cards[2]?.card?.card?.info);

      const menuItems =
        json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards || [];
      setRestaurantsMenu(menuItems.map((item) => item?.card?.info));
      console.log(restaurant)
      console.log(menuItems)
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <ShimmerMenu />;
  }

  return (
    <div className="restaurant-page">
      <div>
        {/* <h3>RestaurantMenu id: {id}</h3> */}
        <h2>{restaurant?.name}</h2>
      </div>
      <div className="restaurant-status">
        <div className="restaurant-status-inner-div">
        <h3>
          {restaurant?.avgRatingString +
            " (" +
            restaurant?.totalRatingsString +
            ")"}{" "}
          {restaurant?.costForTwoMessage}
        </h3>
        <h3>
          {restaurant?.cuisines
            ? restaurant?.cuisines.join(" , ")
            : "Cuisines not available"}
        </h3>
        </div>
      </div>

      <div className="menu">
        <h2>Menu</h2>
        {restaurantMenu.length > 0 ? (
          <ul>
            {restaurantMenu?.map((item, index) => (
              <li key={index} className="menu-list">
                <div>
                <h3>{item.name}</h3>
          
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
                <p>{item.description || "No description available"}</p>
                </div>
                <div className="menu-img"> <img src={(IMG_CDN_MENU + item.imageId)} ></img></div>
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
