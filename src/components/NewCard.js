import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import VideoPlayerModal from "./VideoPlayerModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NewCard = ({
  id,
  videoName,
  videoSource,
  videoCategory,
  handleRemoveCard,
}) => {
  const history = useHistory();
  const [playing, setPlaying] = useState(false);

  function onPlayButtonClick() {
    setPlaying(true);

    const curr = new Date();
    const time = curr.toLocaleTimeString(),
      date = curr.toLocaleDateString();
    const entry = {
      videoName,
      date,
      time,
    };
    console.log(entry);
    var hist = [];
    hist = JSON.parse(localStorage.getItem("watchHist")) || [];
    hist.unshift(entry);
    localStorage.setItem("watchHist", JSON.stringify(hist));
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col xs={8}>
          <Card style={{ width: "18rem" }} className="card">
            <Card.Body>
              <Card.Title className="card-title">{videoName}</Card.Title>
              <div className="card-category">
                <h6>Category: {videoCategory}</h6>
              </div>
              <div className="card-source">
                <div>Source: {videoSource}</div>
              </div>
              <Button
                variant="primary"
                onClick={() => history.push(`/edit/${id}`)}
              >
                Edit
              </Button>{" "}
              <Button variant="danger" onClick={() => handleRemoveCard(id)}>
                Delete
              </Button>{" "}
              <Button variant="warning" onClick={() => onPlayButtonClick()}>
                {" "}
                Play{" "}
              </Button>
            </Card.Body>
            <div>
              {playing === true && (
                <VideoPlayerModal
                  url={videoSource}
                  rePlay={setPlaying}
                  videoName={videoName}
                />
              )}
            </div>
          </Card>
        </Col>
      </Row>
      <br></br>
    </Container>
  );
};

export default NewCard;
