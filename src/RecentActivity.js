import React from "react";
import styles from "./RecentActivity.module.css";
import Wrapper from "./Wrapper";
import logoYoutube from "./logo-youtube.svg";

function timeAgo(dateString) {
  if (!dateString) {
    return "a while ago";
  }

  const date =
    typeof dateString === "object" ? dateString : new Date(dateString);
  const today = new Date();
  const seconds = Math.round((today - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const weeks = Math.round(days / 7);
  const months = Math.round(weeks / 4);
  const years = Math.round(months / 12);

  if (seconds < 5) {
    return "now";
  } else if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 90) {
    return "about a minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 20) {
    return `${days} days ago`;
  } else if (weeks < 7) {
    return `${weeks} weeks ago`;
  } else if (months < 12) {
    return `${months} months ago`;
  } else {
    return `${years} years ago`;
  }
}

const RecentActivity = (props) => {
  return (
    <Wrapper title="Recent Activity">
      <div className={styles.RecentActivity}>
        {props.launches.map((launch) => {
          return (
            <div key={launch.flight_number} className={styles.Launch}>
              <img
                src={launch.links.mission_patch_small}
                alt="mission-patch"
                className={styles.MissionPatch}
              />
              <div className={styles.Content}>
                <div className={styles.Date}>
                  {timeAgo(launch.launch_date_utc)}
                </div>
                <div className={styles.Title}>{launch.mission_name}</div>
              </div>
              <button
                href="#"
                className={styles.Video}
                onClick={() => {
                  props.onVideoRequested(launch.links.youtube_id);
                }}
              >
                <img src={logoYoutube} alt="youtube logo" />
              </button>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default RecentActivity;
