import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return <div style={{ backgroundColor: "green" }}>{this.props.title}</div>;
  }
}

export default Footer;
