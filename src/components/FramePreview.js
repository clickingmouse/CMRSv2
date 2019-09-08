import React from "react";
import FilePreview from "./FilePreview";
import { Card, Button, ResponsiveEmbed } from "react-bootstrap";
import testmedia from "../media/Wildlife.ogv";
import testimg from "../media/background-1.png";

// test array

//
export default function FramePreview(props) {
  const { frame } = props;
  //console.log(frame);
  //console.log(frame.file.type);

  return (
    <div>
      FRAME
      <hr />
      <Card style={{ width: "18rem" }}>
        <Card.Img></Card.Img>

        <Card.Body>
          <ResponsiveEmbed aspectRatio="16by9">
            <video autoPlay controls poster={testimg}>
              <source src={testimg} type="image/png" />

              <source src={testmedia + "#t=0,5"} type="video/ogg" />
              <source src={testimg} type="image/png" />
            </video>
          </ResponsiveEmbed>
          <Card.Title>Frame idx - </Card.Title>
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
