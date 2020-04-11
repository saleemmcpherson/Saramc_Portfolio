import React, { Component } from "react";
// import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Burger, Menu } from "../components/Burger";

export class about extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <div>
          <Burger/>
          <Menu/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default about;
