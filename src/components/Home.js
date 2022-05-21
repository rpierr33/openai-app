import React from "react";
import { Component } from "react";
import Main from "./Main";

import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
      <br />
      <br />
        <h1>Fun with AI </h1>
        <p>This app allows users to 
          easily generate content on  
          any topic by entering a 
          descriptive prompt!</p>
      <br />
      <br />
      
      <Row>
      <Col>
      <Main 
      theLink="/Prompt"
      />
      </Col>
      </Row>
      </Container>
      </div>
    );
  }
}

export default Home;
