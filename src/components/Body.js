import { useState, useEffect ,useContext } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import OfflinePage from "./OfflinePage";
import UserContext from "../utils/UserContext";
const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]); // Initialize as empty array to avoid issues during rendering
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Filtered results
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true); // Loading state
    const {user,setUser} = useContext(UserContext)

    useEffect(() => {
        getRestaurants();
    }, []);


    async function getRestaurants() {
        try {
             const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();

            console.log(json);
            // Extract the restaurant data from the correct location
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            
            // Set the extracted restaurant data
            setAllRestaurants(restaurants);
            setFilteredRestaurants(restaurants); // Initialize filteredRestaurants with all restaurants
            setLoading(false); // Set loading to false after data is fetched
        
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
            setLoading(false); // Stop loading even in case of error
        }
    }

    const offline = useOnline();
    if(!offline) {
        return <OfflinePage />
    }

    return (
        <>
       
            <div className="flex justify-center md:m-[0px 13px 5px 20px] m-5 p-2"> 
                <input
                    type="text"
                    className="text-sm p-2 rounded border border-gray-300 w-[640px]"
                    placeholder=" Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value); // Update search text
                    }}
                />
                <button
                    className="ml-2 mr-3.75 px-3  text-sm  bg-black text-white rounded cursor-pointer hover:bg-orange-700"
                    onClick={() => {    
                        const data = filterData(searchText, allRestaurants); // Filter using the original list
                        setFilteredRestaurants(data); // Update filtered results
                    }}
                >
                    Search
                </button>
            
            </div>

            {loading ? (
                // <p>Loading...</p> // Show a loading message while fetching
                <Shimmer/ >
            ) : (
                <div className="flex flex-wrap md:m-3  md:pl-2.5">
                    {filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map((restaurant) => 
                        (<Link to={"/restaurant/" + restaurant.info.id}
                        key={restaurant.info.id}
                        >
                            <RestaurantCard {...restaurant.info}  />
                            </Link>
                        ))
                    ) : (
                        <p>No restaurants found</p> // Show a message when no restaurants match
                    )}
                </div>
            )}
        </>
    );
};

export default Body;
