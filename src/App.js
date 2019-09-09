import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";

import "./App.css";

function App() {
  const [frames, setFrames] = useState([]);

  const handleSubmit = frame => {
    console.log("handleSubmit");
    setFrames([...frames, frame]);

    console.log(typeof frames);
  };

  return (
    <div className="App">
      <NavBar />

      <Row>
        <Col>
          <LeftPane handleSubmit={handleSubmit} />
        </Col>
        <Col>
          <RightPane frames={frames} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
