import React, { useState, useEffect } from "react";
import rocket from "./rocket.svg";
import "./App.css";
import NextLaunch from "./NextLaunch";
import RecentActivity from "./RecentActivity";
import Player from "./Player";

function App() {
  const [nextLaunch, setNextLaunch] = useState({
    mission_name: "",
    launch_date_utc: new Date(),
    links: { mission_patch_small: "" },
    details: "",
  });
  async function fetchNextLaunch() {
    let result = await fetch("https://api.spacexdata.com/v3/launches/next");
    let data = await result.json();
    return data;
  }
  useEffect(() => {
    fetchNextLaunch().then((data) => setNextLaunch(data));
  }, []);

  const [recentActivity, setRecentActivity] = useState([]);
  async function fetchRecentActivity() {
    let result = await fetch(
      "https://api.spacexdata.com/v3/launches/past?limit=6&order=desc"
    );
    let data = await result.json();
    return data;
  }
  useEffect(() => {
    fetchRecentActivity().then((data) => setRecentActivity(data));
  }, []);
 
  const [videoID, setVideoID] = useState("");
  const [videoVisible, setVideoVisible] = useState(false);
  function onVideoRequested(videoID){
    setVideoID(videoID);
    setVideoVisible(true);
  }
  function onVideoClose(){
    setVideoID(null);
    setVideoVisible(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={rocket} className="App-logo" alt="logo" />
        SpaceX Launches
      </header>
      <Player videoID={videoID} videoVisible={videoVisible} onClose={onVideoClose}></Player>
      <div className="Content">
        <RecentActivity launches={recentActivity} onVideoRequested={onVideoRequested}></RecentActivity>
        <NextLaunch launch={nextLaunch}></NextLaunch>
      </div>
    </div>
  );
}

export default App;
