import React, { useState } from "react";
import FilePreview from "./FilePreview";
import MediaPreview from "./MediaPreview";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ResponsiveEmbed
} from "react-bootstrap";
import testmedia from "../media/Wildlife.ogv";
import testimg from "../media/background-1.png";

// test array

//
export default function FrameEditor(props) {
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
      <Card style={{ width: "18rem" }}>
        <Card.Title>Frame idx - </Card.Title>
        <Card.Img></Card.Img>

        <Card.Body>
          <MediaPreview
            input={props.input}
            setMediaPlayTime={x => console.log("dummy; nothing", x)}
          />
          <Row>{duration}</Row>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Up</Button>
          <Button variant="primary">Dn</Button>
        </Card.Body>
      </Card>
      <FilePreview input={testmedia} />
    </div>
  );
}
