import React from "react";
import { Container } from "react-bootstrap";

export default function FilePreview(props) {
  const { fileUrl } = props.input;
  //const { media } = props;
  var visible;
  if (fileUrl) {
    visible = (
      <Container>
        <video controls src={fileUrl} preload="metadata" height="auto" />
      </Container>
    );
  } else {
  }

  return <div style={{ width: "auto" }}>{visible}</div>;
}
