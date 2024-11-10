import { useState } from "react";
import { restaurantList } from "../config";
import { RestaurantCard } from "./RestaurantCard";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState(restaurantList); // Original list
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList); // Filtered results
    const [searchText, setSearchText] = useState("");

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
            <div className="restaurant-list"> 
                {filteredRestaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
                })}
            </div>
        </>
    );
};

export default Body;
