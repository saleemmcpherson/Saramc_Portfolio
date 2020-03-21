import React, { Component } from "react";

export class Main extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "tomato" }}>
        {this.props.title}
      </div>
    );
  }
}

export default Main;
