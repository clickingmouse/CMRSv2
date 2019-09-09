import React, { useState } from "react";
import FilePreview from "./FilePreview";
import MediaPreview from "./MediaPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAngleDoubleDown,
  faAngleDoubleUp,
  faCaretSquareUp,
  faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Card,
  Button,

  //Text,
  ResponsiveEmbed
} from "react-bootstrap";
import testmedia from "../media/Wildlife.ogv";
import testimg from "../media/background-1.png";

// test array

//
export default function FrameEditor(props) {
  console.log(props);
  const { frame } = props;

  //console.log(frame);
  //console.log(frame.file.type);
  const [caption, setCaption] = useState("");
  const [duration, setDuration] = useState();

  const onVideoLoaded = e => {
    //    this.props.deleteItem(id);
    console.log(e.target.duration);
    setDuration(e.target.duration);
  };

  return (
    <div>
      FRAME
      <hr />
      <Card style={{ width: "100%" }}>
        <Card.Header>
          <Button
            disabled
            size="sm"
            variant="primary"
            style={{ width: "100%" }}
          >
            <FontAwesomeIcon icon={faAngleDoubleUp} size="xs" />
          </Button>
        </Card.Header>
        <Card.Title>Frame Sequence - {props.index}</Card.Title>
        <Card.Img></Card.Img>

        <Card.Body mx-auto className="py-0">
          <Row className="px-0">
            <Col xs={5} className="px-0">
              <MediaPreview
                input={props.input}
                setMediaPlayTime={x => console.log("dummy; nothing", x)}
              />
            </Col>
            <Col xs={5} className="px-0">
              <Card.Text style={{ display: "flex", height: "100%" }}>
                <button disabled style={{ flexGrow: 1 }}>
                  {props.input.caption}{" "}
                </button>
              </Card.Text>
            </Col>
            <Col xs={2} className="p-0">
              <Row>
                <Col xs={1}>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    placeholder="n"
                    size="2"
                    value={props.input.playLength}
                  />
                </Col>
                <Col xs={1}>
                  <Button disabled size="sm" variant="primary">
                    <FontAwesomeIcon icon={faCaretSquareUp} size="xs" />
                  </Button>
                  <Button disabled size="sm" variant="primary">
                    <FontAwesomeIcon icon={faCaretSquareDown} size="xs" />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Button
            disabled
            size="sm"
            variant="primary"
            style={{ width: "100%" }}
          >
            <FontAwesomeIcon icon={faAngleDoubleDown} size="xs" />
          </Button>
        </Card.Footer>
      </Card>
      <FilePreview input={testmedia} />
    </div>
  );
}
