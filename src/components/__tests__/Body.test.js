import "@testing-library/jest-dom";
import Body from "../Body";
import { render, waitFor, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  })
);

test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(10);
});

test("Search results on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});

test("Should show search results on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");

  const searchBtn = body.getByTestId("search-btn");
  act(() => {
    fireEvent.change(input, {
      target: {
        value: "food",
      },
    });
    fireEvent.click(searchBtn);
  });
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(1);
});

test("Should show proper message on no search results on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");

  const searchBtn = body.getByTestId("search-btn");
  act(() => {
    fireEvent.change(input, {
      target: {
        value: "abc",
      },
    });
    fireEvent.click(searchBtn);
  });
  const resList = body.getByTestId("res-list");
  expect(resList.innerHTML).toBe("<h1>No Restaurant match your filter!</h1>");
});
