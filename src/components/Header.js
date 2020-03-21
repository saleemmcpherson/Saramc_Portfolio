import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "teal" }}>
        {this.props.title}
      </div>
    );
  }
}

export default Header;
