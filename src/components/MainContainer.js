import React, { Component } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import SideNav from "./SideNav/SideNav";

export class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        {/* <Header title="this is where the header will be"/> */}
        {/* {this.props.title} */}
        {/* <Footer title="this is where the footer will be"/> */}
        <SideNav />
      </div>
    );
  }
}

export default Main;
