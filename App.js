import React from "react";
import ReactDOM from "react-dom/client";
import Logo from'./images/reactlogo.svg';
import userIcon from'./images/userimage.jpeg';

// const h1 = React.createElement("h1", {key: "one"}, "Hello h1");
// const h2 = React.createElement("h2", {key: "two"}, "Hello h2");
// const h3 = React.createElement("h3", {key: "three"}, "Hello h3");

// const header = React.createElement("div", {className: "title"}, [h1, h2, h3]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

// const Header = () => (
//   <div>
//     <h1>Hello h1</h1>
//     <h2>Hello h2</h2>
//     <h3>Hello h3</h3>
//   </div>
// )
  
// const HeaderComponent = () => {
//   return (
//     <div>
//       {Header()}
//     </div>  
//   )
// }

const TitleComponent = () => (
  <h1 id="title" key = "h1">
    Component Composition
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <div className="header">
        <img src={Logo} alt="React logo" className="logo" />
        <input type="text" placeholder="Search" className="search"/>
        <img src={userIcon} alt="userImage" className="user-icon" width="32px"/>
      </div>
      <TitleComponent />
      <h1>Namaste React Functional Component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a React element inside the root.
root.render(<HeaderComponent />)