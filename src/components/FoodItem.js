import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const IMG_CDN_MENU =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

const FoodItem = ({ id, name, price, description, imageId }) => {
  const dispatch = useDispatch();

  // Function to handle removing the food item
  const removeFoodItem = () => {
    dispatch(removeItem({ id })); // Pass the unique `id` of the item to remove
  };

  return (
    <div className="flex w-full mb-6 p-4 border-b border-gray-200">
      {/* Left Section: Item Details */}
      <div className="flex-1 pr-6">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">Price: ₹{price / 100}</p>
        <p className="text-sm text-gray-500 mt-2">
          {description || "No description available"}
        </p>
      </div>

      {/* Right Section: Image and Remove Button */}
      <div className="w-[150px] flex-shrink-0 relative">
        <img
          className="h-[150px] w-[150px] rounded-lg object-cover border border-gray-300"
          src={IMG_CDN_MENU + imageId}
          alt="Menu item"
        />
        <button
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-red-300 hover:bg-red-400 text-sm text-white py-1 px-4 rounded-md"
          onClick={removeFoodItem}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
