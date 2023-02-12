import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1
        className="font-bold text-3xl"
        data-testid="cartHeader"
      >
        Cart - {cartItems.length} items
      </h1>
      <button
        data-testid="clearCart"
        className="bg-green-100 p-2 m-5"
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
      <div
        className="flex"
        data-testid="cartItems"
      >
        {cartItems.map((item) => (
          <FoodItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
export default Cart;
