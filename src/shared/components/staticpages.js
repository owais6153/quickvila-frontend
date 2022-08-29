import React, { Component } from "react";

class StaticPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.onPageLoad(false);
  }
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
export default StaticPage;
