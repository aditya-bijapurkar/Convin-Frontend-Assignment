import React from "react";
import { useHistory } from "react-router-dom";

const NewEntry = ({ videoName, time }) => {
  const history = useHistory();

  return (
    <div>
      <h2>{videoName}</h2>
      <h3>{time}</h3>
    </div>
  );
};

export default NewEntry;
