import React from "react";
import styles from "./NextLaunch.module.css";
import Wrapper from "./Wrapper";

const RecentActivity = (props) => {
  return (
    <Wrapper title="Recent Activity">
      <div className={styles.RecentActivity}>
        {props.launches.map((launch) => {
          return (
            <div key={launch.flight_number}>
              <img src={launch.links.mission_patch_small} alt="mission-patch" />
              <div className={styles.Date}>
                {new Date(launch.launch_date_utc).toLocaleString("en-US")}
              </div>
              <div className={styles.Title}>{launch.mission_name}</div>
              <a href={launch.links.video_link}>Youtube</a>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default RecentActivity;
