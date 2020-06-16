import React from "react";
import styles from "./NextLaunch.module.css";
import Wrapper from "./Wrapper";

const NextLaunch = (props) => {
  let launch = props.launch;
  return (
    <Wrapper title="Next Launch">
      <div className={styles.NextLaunch}>
        <img
          src={launch.links.mission_patch_small}
          alt="mission-patch"
          className={styles.MissionPatch}
        />
        <div className={styles.Content}>
          <h2>{launch.mission_name}</h2>
          <h3>{new Date(launch.launch_date_utc).toLocaleString("en-US")}</h3>
          <p>{launch.details}</p>
          <a
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?text=${escape(
              "So excited by " + launch.mission_name + "! @SpaceX @elonmusk "
            )}&url=${launch.links.mission_patch_small}&via=posos_tech`}
            data-size="large"
          >
            Tweet
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default NextLaunch;
