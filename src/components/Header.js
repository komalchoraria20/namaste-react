import { useState, useContext } from "react";
import Logo from "../assets/img/foodvilla.webp";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img
      data-testid="logo"
      className="h-28 p-2"
      alt="logo"
      src={Logo}
    />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-200 md:bg-yellow-100">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contacts</li>
          </Link>

          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li
              className="px-2"
              data-testid="cart"
            >
              Cart - {cartItems.length} items
            </li>
          </Link>
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-900">{user?.name}</span>
      <span data-testid="auth">
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </span>
    </div>
  );
};
export default Header;
