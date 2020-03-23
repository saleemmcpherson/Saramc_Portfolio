import React, { Component } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";

class App extends Component {
  render() {
    return (
      <div>
        <MainContainer title="This is where the main content will be"/>
      </div>
    );
  }
}

export default App;
