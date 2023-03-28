import React from "react";
import _ from "lodash";
import NewEntry from "./NewEntry";

const WatchHistory = ({ past, setPast }) => {
  return (
    <React.Fragment>
      <h1>Your video watching history</h1>
      <div className="past-list">
        {!_.isEmpty(past) ? (
          past.map((p) => <NewEntry {...p} />)
        ) : (
          <p className="message">You did not watch any videos yet</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default WatchHistory;
