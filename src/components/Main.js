import React, { Component } from "react";

export class Main extends Component {
  render() {
    return (
      <div className="mainContainer" style={{ backgroundColor: "tomato" }}>
        {this.props.title}
      </div>
    );
  }
}

export default Main;
