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

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price / 100) * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-4 border-b-4 border-gray-300 mb-6 rounded-md">
        <h4 className="font-bold text-2xl sm:text-3xl mb-3 sm:mb-0">
          Cart - {cartItems.length}
        </h4>
        <button
          className="bg-red-200 p-2 border-2 border-red-500 rounded-md hover:bg-red-300"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Body */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="lg:w-3/4 w-full p-4 border rounded-md border-gray-300">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <FoodItem key={item.id} {...item} />)
          ) : (
            <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
          )}
        </div>

        {/* Right Section - Order Summary */}
        <div className="lg:w-1/4 w-full p-4 border rounded-md border-gray-300 bg-gray-50">
          <h4 className="font-bold text-xl mb-4 text-center lg:text-left">Order Summary</h4>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm border-b pb-2"
              >
                <span className="w-[55%]">{item.name} (x{item.quantity})</span>
                <span className="w-[25%] text-right">
                  ₹{((item.price / 100) * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-200 text-red-700 px-2 py-0.5 rounded-md hover:bg-red-300 text-xs"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="border-t mt-4 pt-4">
            <h5 className="font-bold text-lg flex justify-between">
              <span>Total:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
