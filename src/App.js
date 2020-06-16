import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import NextLaunch from "./NextLaunch";
import Wrapper from "./Wrapper";

function App() {
  const [nextLaunch, setNextLaunch] = useState({
    mission_name: "",
    launch_date_utc: new Date(),
    links: { mission_patch_small: "" },
    details: ""
  });

  async function fetchNextLaunch() {
    let result = await fetch("https://api.spacexdata.com/v3/launches/next");
    let data = await result.json();
    return data;
  }

  useEffect(() => {
    fetchNextLaunch().then((data) => setNextLaunch(data));
  }, []);

  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: true,
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <Player></Player> */}
      <div className="Content">
        <Wrapper title="Recent activity">
          {/* <LastLaunches></LastLaunches> */}
        </Wrapper>
        <NextLaunch launch={nextLaunch}></NextLaunch>
      </div>
    </div>
  );
}

export default App;
