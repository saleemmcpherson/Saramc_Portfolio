import React, { Component } from "react";
import MainContainer from "../components/Main/MainContainer";
import Footer from "../components/Footer/Footer";

export class about extends Component {
  render() {
    return (
      <div>
        <MainContainer title="This is where the main content will be" />
        <Footer />
      </div>
    );
  }
}

export default about;
