import React, { Component } from "react";
import ComponentAuthError from "../components/component-autherror";

class StaticPage extends Component {
  componentDidMount() {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // behavior: "instant",
    });
  }
  render() {
    return (
      <React.Fragment>
        {(this.props.authRequired && this.props.isLogin) ||
        !this.props.authRequired ? (
          this.props.children
        ) : (
          <ComponentAuthError />
        )}
      </React.Fragment>
    );
  }
}
export default StaticPage;
