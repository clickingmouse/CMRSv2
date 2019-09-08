import React, { useState } from "react";
import FilePreview from "./FilePreview";
import Play from "./Play";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ResponsiveEmbed
} from "react-bootstrap";
import testmedia from "../media/Wildlife.ogv";
import testimg1 from "../media/background-1.png";
import testimg2 from "../media/supermarkt.jpeg";
// test array
const playList = [
  { playDuration: 3, source: testimg1, type: "image" },
  { playDuration: 5, source: testimg2, type: "image" },
  { playDuration: 5, source: testmedia, type: "video" }
];
//
export default function PlayAll(props) {
  //  const { frame } = props;
  console.log("received", props.playlist);

  const frame0 = playList[0];
  const [currentIndex, setIndex] = useState(0);

  //
  //
  //
  const handlePlayAll = () => {
    console.log("playLength", props.playlist[currentIndex].playLength);
    if (currentIndex < props.playlist.length - 1) {
      setTimeout(() => {
        // increment index on after X seconds
        setIndex(currentIndex + 1);
      }, props.playlist[currentIndex].playLength * 1000);
      setTimeout(() => {
        console.log("after incr", currentIndex);
      }, 1000);
    }
  };
  handlePlayAll();
  return (
    <div>
      FRAME
      <hr />
      <Card style={{ width: "auto" }}>
        <Card.Img></Card.Img>

        <Card.Body>
          {console.log("playing ... ", currentIndex)}
          <Play
            media={props.playlist[currentIndex].source}
            type={props.playlist[currentIndex].file.type}
          />
          <Card.Title>Frame idx - </Card.Title>
        </Card.Body>
      </Card>
      <FilePreview input={testmedia} />
    </div>
  );
}
