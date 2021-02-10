import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import GlobalStyled from "./components/GlobalStyle"

// import pages
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
