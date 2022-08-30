import React, { Component } from "react";

class StaticPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.onPageLoad) {
      this.props.onPageLoad(false);
    }
    if (this.props.getData) {
      this.props.getData();
    }
  }
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
export default StaticPage;
