import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { useState, useEffect } from "react";



const IMG_CDN_MENU =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const truncateWords = (text, wordLimit) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const FoodItem = ({ id, name, price, description, imageId }) => {
  const dispatch = useDispatch();
  const width = useWindowWidth();

  const removeFoodItem = () => {
    dispatch(removeItem(id));
  };

  // Truncate description on mobile (width < 640px)
  const truncatedDescription = width < 640 ? truncateWords(description, 15) : description;

  return (
    <div className="flex flex-col sm:flex-row w-full mb-6 p-4 border rounded-md bg-white shadow-sm">
      {/* Text Content */}
      <div className="flex-1 sm:pr-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-1">Price: ₹{price / 100 || "N/A"}</p>
        <p className="text-sm text-gray-500">{truncatedDescription || "No description available"}</p>
      </div>

      {/* Image & Remove Button */}
      <div className="mt-4 sm:mt-0 sm:w-[160px] flex-shrink-0 relative">
        {imageId ? (
          <img
            className="h-[180px] w-[250px] md:h-[150px] md:w-[150px] object-cover rounded-lg border border-gray-300 mx-auto sm:mx-0"
            src={IMG_CDN_MENU + imageId}
            alt={name}
          />
        ) : (
          <div className="h-[150px] w-[150px] flex items-center justify-center bg-gray-100 text-gray-400 rounded-lg border border-gray-300 mx-auto sm:mx-0">
            No Image
          </div>
        )}
        <button
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-red-400 hover:bg-red-500 text-white text-sm py-1 px-4 rounded-md"
          onClick={removeFoodItem}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
