import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <About />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
