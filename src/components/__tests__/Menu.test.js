import "@testing-library/jest-dom";
import { render, waitFor, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  })
);

test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));
  const addBtn = body.getAllByTestId("addBtn");
  act(() => {
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);
  });

  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 2 items");
});
