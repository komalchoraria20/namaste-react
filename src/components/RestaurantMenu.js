import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //   const params = useParams();
  //   const { resId } = params;
  //const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avagRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>

      <div className="p-5">
        <h1>Menu</h1>
        <ul data-testid="menu">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name} -{" "}
              <button
                data-testid="addBtn"
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
