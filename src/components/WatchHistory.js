import React from "react";
import _ from "lodash";
import NewEntry from "./NewEntry";

const WatchHistory = () => {
  var hist = JSON.parse(localStorage.getItem("watchHist")) || null;
  return (
    <React.Fragment>
      <h1>Your video watching history</h1>
      <br />
      <div className="past-list">
        {hist ? (
          hist.map((h) => (
            <NewEntry videoName={h.videoName} date={h.date} time={h.time} />
          ))
        ) : (
          <p className="message">You did not watch any videos yet</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default WatchHistory;
