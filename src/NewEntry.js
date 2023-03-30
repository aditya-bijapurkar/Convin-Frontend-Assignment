import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NewEntry = ({ videoName, date, time }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={3}>{videoName}</Col>
        <Col xs={2}>
          <Row>
            <Col>Date: {date}</Col>
          </Row>
          <Row>
            <Col>Time: {time}</Col>
          </Row>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default NewEntry;
