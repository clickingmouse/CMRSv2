import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col>
            <LeftPane />
          </Col>
          <Col>
            <RightPane />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
