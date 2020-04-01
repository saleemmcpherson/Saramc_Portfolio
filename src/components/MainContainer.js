import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SideNav from "./SideNav/SideNav";

export class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header title="this is where the header will be"/>
        <SideNav />
        <Footer title="this is where the footer will be"/>
      </div>
    );
  }
}

export default Main;
