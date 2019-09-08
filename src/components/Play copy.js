import React, { useEffect, useLayoutEffect, useRef } from "react";
import { ResponsiveEmbed } from "react-bootstrap";

import testmedia from "../media/Wildlife.ogv";
import testmedia1 from "../media/Wildlife.ogv";
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
  const inputEl = useRef(null);
  const trackEl = useRef(null);
  var testCue;
  console.log("------------------->", props.caption);

  /////////////////////////////////////
  useEffect(() => {
    console.log("<><><><><><><><><><><><><>");
    console.log(inputEl.current);
    console.log(trackEl);
    const video = inputEl.current;
    var track;
    track = video.addTextTrack("captions", "just a test", "en");
    //track = video.textTracks[0];
    //make it visible
    track.mode = "showing";
    console.log(video);
    console.log("video length----=====>", props.duration);
    testCue = new VTTCue(0.0, props.duration, props.caption);
    //setCue(testCue);
    console.log(testCue);
    track.addCue(testCue);

    console.log("addedCue========================>", video.textTracks);
    // track.onCueChange = () => {
    //   console.log("cue finished xxxxxxxxxxxxxx");
    // };
    return () => {
      console.log("unmounting...");
      //  track = video.textTracks[0];
      //console.log(inputEl.textT);
      //console.log(inputEl.textTracks);

      var currentTrack = inputEl.current.textTracks[0];
      console.log("==========================>", currentTrack);
      currentTrack.mode = "disabled";
      //var activeCue = currentTrack.activeCues[0];
      //console.log("activeCue ", activeCue);
      console.log("activeCue ", testCue);
      // console.log(currentTrack);
      // currentTrack.removeCue(testCue);
      // console.log(".....removedCue");
    };
  });

  return (
    <div>
      {filetype === "image" ? (
        <ResponsiveEmbed aspectRatio="16by9">
          <video
            ref={inputEl}
            poster={media}
            preload="auto"
            onLoadStart={console.log(">>>>>>>>>>>>>>>>>NEW")}
            src={props.test}
          >
            <track
              ref={trackRef}
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
