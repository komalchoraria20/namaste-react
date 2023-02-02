import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }
  componentDidMount() {
    console.log("Parent - componentDidMount");
  }
  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user?.name} - {user?.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p>This is the Namaste React live course Chapter7- Finding The Path</p>
        <Profile />
      </div>
    );
  }
}

export default About;
