import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import VideoPlayerModal from "./VideoPlayerModal";

const NewCard = ({
  id,
  videoName,
  videoSource,
  videoCategory,
  handleRemoveCard,
}) => {
  const history = useHistory();
  const [playing, setPlaying] = useState(false);

  return (
    <Card style={{ width: "18rem" }} className="card">
      <Card.Body>
        <Card.Title className="card-title">{videoName}</Card.Title>
        <div className="card-category">
          <div>Category: {videoCategory}</div>
        </div>
        <div className="card-source">
          <div>Source: {videoSource}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemoveCard(id)}>
          Delete
        </Button>{" "}
        <Button variant="warning" onClick={() => setPlaying(true)}>
          {" "}
          Play{" "}
        </Button>
      </Card.Body>
      <div>
        {playing === true && (
          <VideoPlayerModal url={videoSource} rePlay={setPlaying} />
        )}
      </div>
    </Card>
  );
};

export default NewCard;
