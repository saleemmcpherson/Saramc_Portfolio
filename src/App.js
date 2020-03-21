import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header title="This is where the header will be"/>
        <Main title="This is where the main content will be"/>
        <Footer title="This is where the footer will be"/>
      </div>
    );
  }
}

export default App;
