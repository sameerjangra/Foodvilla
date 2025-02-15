import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem.js";
import { clearCart, removeItem } from "../utils/cartSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  // Calculate total price correctly
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price / 100) * item.quantity,
    0
  );

  return (
    <div className="">
      {/* Header Section */}
      <div className="w-[95%] ml-10 flex justify-between items-center bg-gray-100 p-4 border-b-4 border-gray-300">
        <h4 className="font-bold text-3xl">Cart - {cartItems.length}</h4>
        <button
          className="bg-red-200 p-2 border-2 border-red-500 rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="flex">
        {/* Left Section */}
        <div className="w-[80%] ml-4 p-4 border-r-2 border-gray-300">
          {/* Render cart items */}
          {cartItems.length > 0 ? (
            cartItems.map((item) => <FoodItem key={item.id} {...item} />)
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-[25%] mr-5 p-4">
          <h4 className="font-bold text-2xl mb-4">Order Summary</h4>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center pb-2 text-gray-700">
                <span>{item.name} (x{item.quantity})</span>
                <span>{"₹" + ((item.price / 100) * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-300 text-red-700 px-2 py-1 rounded-md text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-gray-300 mt-1 "></div>
          <h5 className="font-bold text-xl flex justify-between">
            <span>Total:</span>
            <span>{"₹ " + totalPrice.toFixed(2)}</span>
          </h5>
          <div className="border-t-2 border-gray-300 mt-1 pt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
