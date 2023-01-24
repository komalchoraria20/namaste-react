import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child - Constructor" + this.props.name);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste");
    }, 1000);
    console.log("Child - componentDidMount");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will Unmount");
  }
  render() {
    console.log("Child - render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}
export default Profile;
