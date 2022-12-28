import React, { Component } from "react";

class StaticPage extends Component {
  componentDidMount() {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // behavior: "instant",
    });
  }
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
export default StaticPage;
