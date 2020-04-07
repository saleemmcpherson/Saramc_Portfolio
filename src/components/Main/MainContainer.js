import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header title="this is where the header will be" />
        <Footer/>
      </div>
    );
  }
}

export default Main;
