import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]); // Initialize as empty array to avoid issues during rendering
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Filtered results
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();

            // Extract the restaurant data from the correct location
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            // Set the extracted restaurant data
            setAllRestaurants(restaurants);
            setFilteredRestaurants(restaurants); // Initialize filteredRestaurants with all restaurants
            setLoading(false); // Set loading to false after data is fetched
            console.log(restaurants); // Optionally log the data to inspect it
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
            setLoading(false); // Stop loading even in case of error
        }
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value); // Update search text
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants); // Filter using the original list
                        setFilteredRestaurants(data); // Update filtered results
                    }}
                >
                    Search
                </button>
            </div>

            {loading ? (
                <p>Loading...</p> // Show a loading message while fetching
            ) : (
                <div className="restaurant-list">
                    {filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map((restaurant) => (
                            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
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
