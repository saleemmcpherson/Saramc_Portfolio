import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export class Main extends Component {
  render() {
    return (
      <div className="mainContainer" style={{ backgroundColor: "tomato" }}>
        <Header title="this is where the header will be"/>
        {this.props.title}
        <Footer title="this is where the footer will be"/>
      </div>
    );
  }
}

export default Main;
