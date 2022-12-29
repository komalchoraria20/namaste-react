
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste Everyone!"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Hello from React!"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a React element inside the root.

root.render(container);
