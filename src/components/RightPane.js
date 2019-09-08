import React, { useState } from "react";
import "./modal.css";

import { Container, Button, Modal } from "react-bootstrap";
//import FramePreview from "./FramePreview";
import FrameEditor from "./FrameEditor";
import PlayAll from "./PlayAll";
import testmedia1 from "../media/Wildlife.ogv";
import testmedia2 from "../media/SampleVideo_1280x720_5mb.mp4";
import testimg1 from "../media/background-1.png";
import testimg2 from "../media/supermarkt.jpeg";

const trial = [
  {
    playLength: 5,
    style: "",
    caption: "abc",
    capPos: "center",
    remix: "",
    file: { name: "Wildlife.ogv", type: "image/png" },
    fileUrl: "",
    source: testimg1,
    test: testmedia1
  },
  {
    playLength: 3,
    style: "",
    caption: "123",
    capPos: "center",
    remix: "",
    file: { name: "Wildlife.ogv", type: "image/png" },
    fileUrl: "",
    source: testimg2,
    test: testmedia2
  },
  {
    playLength: 3,
    style: "",
    caption: "you and me",
    capPos: "center",
    remix: "",
    file: { name: "Wildlife.ogv", type: "image/jpg" },
    fileUrl: "",
    source: testimg1,
    test: testmedia1
  }
];

const trialV = [
  {
    playLength: 5,
    style: "",
    caption: "abc",
    capPos: "center",
    remix: "",
    file: { name: "Wildlife.ogv", type: "video/png" },
    fileUrl: "",
    source: testmedia1,
    test: testmedia1
  },
  {
    playLength: 3,
    style: "",
    caption: "123",
    capPos: "center",
    remix: "",
    file: { name: "Wildlife.ogv", type: "video/png" },
    fileUrl: "",
    source: testmedia2,
    test: testmedia2
  },
  {
    playLength: 3,
    style: "",
    caption: "you and me",
    capPos: "center",
    remix: "",
    file: { name: "Wildlife.ogv", type: "video/jpg" },
    fileUrl: "",
    source: testmedia1,
    test: testmedia1
  }
];

export default function RightPane(props) {
  console.log(props);

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [playList, setPlayList] = useState([]);
  const [frame, setFrame] = useState({
    style: "",
    caption: "",
    capPos: "",
    remix: "",
    file: "",
    fileUrl: "",
    length: ""
  });

  console.log(props);
  const { frames } = props;
  console.log(frames);
  return (
    <div>
      <Container className="bg-dark text-secondary">
        RIGHT
        <hr />
        {frames &&
          frames.map((frame, index) => {
            // set default values
            return <FrameEditor input={frame} key={index} />;
          })}
        {/*      <PlayAll />  <FramePreview />*/}
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        <Modal
          size="lg"
          centered
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          style={{ width: "90%" }}
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Preview</h4>
            <PlayAll playlist={trial} />
            {/*<PlayAll playlist={trial} />*/}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
