import React, { useState } from "react";
//import FontStyle from "./leftpanel/FontStyle";
//import Remix from "./leftpanel/Remix";
//import VideoFile from "./leftpanel/VideoFile";
//import TextInput from "./leftpanel/TextInput";
import FilePreview from "./FilePreview";
import {
  Container,
  Form,
  FormControl,
  FormGroup,
  Row,
  Col,
  Button
} from "react-bootstrap";

export default function LeftPane() {
  const [input, setInput] = useState({
    style: "",
    caption: "",
    remix: "",
    file: "",
    fileUrl: ""
  });
  const [fileReset, setFileReset] = useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    console.log("form submitted", input);
    // reset to 'no file chosen in file upload selection
    setFileReset(1);
  };

  const handleChange = e => {
    //e.preventDefault();
    //console.log(e);
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
    console.log(input);
  };

  const handleFile = e => {
    console.log(e.target.files[0]);
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setInput({
        ...input,
        ["file"]: file,
        ["fileUrl"]: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="style" onClick={handleChange}>
              <Form.Label>Select Style I</Form.Label>
              <Form.Control as="button" value="styleI">
                Style I
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="style" onClick={handleChange}>
              <Form.Label>Select Style II</Form.Label>
              <Form.Control as="button" value="styleII">
                Style II
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="remix">
          <Form.Label>Select Remix</Form.Label>
          <Form.Control as="select" disabled>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="media">
          <Form.Label>Upload Video File</Form.Label>
          <Form.Control
            accept="image/*, video/*"
            className=""
            type="file"
            placeholder="select file"
            onChange={handleFile}
            key={fileReset}
          />
          <Form.Text className="text-muted">Video or Image</Form.Text>
        </Form.Group>
        <div style={{ height: "25vh" }}>
          video/image placeholder
          <FilePreview input={input} />
        </div>
        <Form.Group controlId="caption">
          <Form.Label>Caption</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Enter caption text"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Caption goes here</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          ADD FRAME
        </Button>
      </Form>
    </Container>
  );
}
