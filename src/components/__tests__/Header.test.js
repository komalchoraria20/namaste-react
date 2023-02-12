import { fireEvent, render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { act } from "react-dom/test-utils";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");

  expect(logo.src).toBe("http://localhost/dummy.png");
});
//
test("Online status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("✅");
});

test("Should render login and logout buttons", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const auth = header.getByTestId("auth");

  expect(auth.children[0].innerHTML).toBe("Login");

  act(() => {
    fireEvent.click(auth.children[0]);
  });

  expect(auth.children[0].innerHTML).toBe("Logout");

  act(() => {
    fireEvent.click(auth.children[0]);
  });

  expect(auth.children[0].innerHTML).toBe("Login");
});

test("Cart should have 0 items on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 0 items");
});
