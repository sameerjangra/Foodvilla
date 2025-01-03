import { useParams } from "react-router-dom";
import { useEffect ,useState } from "react";


const useRestaurant = (id)=>{
    
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

return {restaurant,restaurantMenu,loading}
}
export default useRestaurant;
