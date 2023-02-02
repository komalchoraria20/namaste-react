import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useReducer, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6245947&lng=88.4397262&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  console.log("render");

  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>Offline, please check your internet connection!!</h1>;
  // }

  if (!restaurants) return null;

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-2 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-50 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-800 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: "newemail@gmail.com",
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant match your filter!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
        ;
      </div>
    </>
  );
};
export default Body;
