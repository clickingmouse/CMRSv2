import React from "react";
import { Container } from "react-bootstrap";

export default function FilePreview(props) {
  const { fileUrl } = props.input;
  //const { media } = props;
  var visible;
  if (fileUrl) {
    visible = (
      <Container>
        <video controls src={fileUrl} preload="metadata" width="100%" />
      </Container>
    );
  } else {
    console.log("nothing");
  }

  return <div style={{ width: "auto" }}>{visible}</div>;
}
