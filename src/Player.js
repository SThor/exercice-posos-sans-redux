import React, { useState } from "react";
import YouTube from "react-youtube";
import styles from "./Player.module.css";

const Player = (props) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className={styles.Player} style={{maxHeight:props.videoVisible?1000:0}}>
      <div className={styles.YoutubeContainer}>
        <YouTube videoId={props.videoID} opts={opts} />
      </div>
      <button onClick={props.onClose}>Close video player</button>
    </div>
  );
};

export default Player;
