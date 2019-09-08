import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";

import testmedia from "../media/Wildlife.ogv";
import testimg1 from "../media/background-1.png";
import testimg2 from "../media/supermarkt.jpeg";
import someCues from "../media/blank.vtt";
export default function Play(props) {
  // type==image || video
  const media = props.media;
  console.log(props.type);
  const type = props.type;
  var filetype = type.split("/")[0];
  console.log(filetype);
  return (
    <div>
      {filetype === "image" ? (
        <ResponsiveEmbed aspectRatio="16by9">
          <video poster={media}>
            <source src={testmedia}></source>
            <track
              id="track"
              default
              label="English"
              kind="captions"
              srcLang="en"
              src={someCues}
            />
          </video>
        </ResponsiveEmbed>
      ) : (
        <ResponsiveEmbed aspectRatio="16by9">
          <video controls>
            <source src={media + "#t=0,5"} type="video/ogg" />
            <track
              id="track"
              default
              label="English"
              kind="captions"
              srcLang="en"
              onCueChange={() => {
                console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
              }}
            />
          </video>
        </ResponsiveEmbed>
      )}
    </div>
  );
}
