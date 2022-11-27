import React, { Component } from "react";

class StaticPage extends Component {
  componentDidMount() {
    if (this.props.onPageLoad) {
      this.props.onPageLoad(false);
    }
    if (this.props.getData) {
      this.props.getData();
    }
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
