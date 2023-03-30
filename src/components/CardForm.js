import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Container from "react-bootstrap/Container";

const CardForm = (props) => {
  const [card, setCard] = useState({
    videoName: props.card ? props.card.videoName : " ",
    videoSource: props.card ? props.card.videoSource : " ",
    videoCategory: props.card ? props.card.videoCategory : " ",
  });

  const [errMsg, setErrMsg] = useState(" ");
  const { videoName, videoSource, videoCategory } = card;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [videoName, videoSource, videoCategory];
    let errMsg = " ";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const card = {
        id: uuidv4(),
        videoName,
        videoSource,
        videoCategory,
      };
      props.handleOnSubmit(card);
    } else {
      errMsg = "Please fill all the fields";
    }
    setErrMsg(errMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      default:
        setCard((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      <h1>Add a new video</h1>
      {errMsg && <p className="errorMsg">{errMsg}</p>}
      <Container>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="name">
            <Form.Label>File Name</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="videoName"
              value={videoName}
              placeholder="Enter the name of the File"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="source">
            <Form.Label>File Source</Form.Label>
            <Form.Control
              className="input-control"
              type="url"
              name="videoSource"
              value={videoSource}
              placeholder="Enter a youtube video source link"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="bucket">
            <Form.Label>Media Category/Genre</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="videoCategory"
              value={videoCategory}
              placeholder="Enter the Category/Genre of the media"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-btn">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CardForm;
