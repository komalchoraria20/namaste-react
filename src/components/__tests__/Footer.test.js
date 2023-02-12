import { render } from "@testing-library/react";
import Footer from "../Footer";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Footer should load on rendering the page", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );

  const footer = header.getByTestId("footer");

  expect(footer.innerHTML).toBe(
    "This site is developed by Dummy Name - dummy@gmail.com"
  );
});
