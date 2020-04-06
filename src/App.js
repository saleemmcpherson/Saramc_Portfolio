import React, { Component } from "react";
import "./styles/App.css";
import MainContainer from "./components/Main/MainContainer";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <MainContainer title="This is where the main content will be" />
        <Footer/>
      </div>
    );
  }
}

export default App;
