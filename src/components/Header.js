import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <header>
      <Container>
        <Row>
          <Col xs={6}>
            <h1>Convin Frontend Assignment</h1>
            <h3>Youtube Video Player Application</h3>
          </Col>
          <Col xs={4}></Col>
          <Col>
            <p> Date : {date.toLocaleDateString()}</p>
            <p> Time : {date.toLocaleTimeString()}</p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col>
            <NavLink to="/" className="link" activeClassName="active" exact>
              Available videos
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/add" className="link" activeClassName="active">
              Add new video
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/history" className="link" activeClassName="active">
              Check Watching History
            </NavLink>
          </Col>
        </Row>
      </Container>
      <hr />
    </header>
  );
};

export default Header;
