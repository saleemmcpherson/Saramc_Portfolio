import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export class about extends Component {
  render() {
    return (
      <div>
        <Header title="this is where the header will be" />
        <Footer/>
      </div>
    );
  }
}

export default about;
