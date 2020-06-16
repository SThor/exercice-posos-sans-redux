import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NextLaunch from "./NextLaunch";
import Wrapper from "./Wrapper";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <Player></Player> */}
      <div className="Content">
        <Wrapper title="Recent activity">{/* <LastLaunches></LastLaunches> */}</Wrapper>
        <NextLaunch></NextLaunch>
      </div>
    </div>
  );
}

export default App;
