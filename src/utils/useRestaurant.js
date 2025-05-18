import { useEffect, useState } from "react";

const useRestaurant = (id) => {
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
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.1491875&lng=75.7216527&restaurantId=${id}`
      );
      const json = await data.json();

      const infoCard = json?.data?.cards.find(
        (card) => card?.card?.card?.info
      );
      setRestaurants(infoCard?.card?.card?.info || {});

      const regularCards =
        json?.data?.cards
          ?.find((card) => card?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const menuItems = [];

      for (const card of regularCards) {
        const items = card?.card?.card?.itemCards;
        if (items?.length) {
          menuItems.push(...items.map((item) => item?.card?.info));
        }
      }

      setRestaurantsMenu(menuItems);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    } finally {
      setLoading(false);
    }
  }
  // console.log(restaurantMenu);

  return { restaurant, restaurantMenu, loading };
};

export default useRestaurant;
