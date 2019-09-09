import React, { Component, useEffect, useLayoutEffect, useRef } from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import placeholderMedia from "../media/Wildlife.ogv";
import testmedia from "../media/Wildlife.ogv";
import testmedia1 from "../media/Wildlife.ogv";
import testimg1 from "../media/background-1.png";
import testimg2 from "../media/supermarkt.jpeg";
import someCues from "../media/blank.vtt";
class Play extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log(
      "componenet did mount....................",
      // this.myRef.current,
      this.props.caption
    );
    const video = this.myRef.current;
    console.log(video);
    //const track = video.textTracks[0];
    const track = video.addTextTrack("captions", "just a test", "en");
    //make it visible
    track.mode = "showing";
    console.log(track);
    const testCue = new VTTCue(0.0, this.props.duration, this.props.caption);
    track.addCue(testCue);
    console.log(track);
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log(".................componenet did update", prevProps);
    console.log(".................", this.props);

    const video = this.myRef.current;
    console.log(video);
    video.load();
    const currentTrack = video.textTracks;
    console.log(currentTrack);
    console.log(video.textTracks[0].cues);
    const currentCue = video.textTracks[0].cues[0];
    console.log(video.textTracks.cues);
    currentTrack[0].removeCue(currentCue);
    //video.textTracks[0].mode = "disabled";
    //////////////////////////////////////////////////////
    const testCue = new VTTCue(0.0, this.props.duration, this.props.caption);
    currentTrack[0].addCue(testCue);
  }

  render() {
    /////////////////////////////////////

    // type==image || video

    console.log(this.props.type);
    const type = this.props.type;
    var filetype = type.split("/")[0];
    console.log(filetype);

    var testCue;
    console.log("------------------->", this.props.caption);
    const media = this.props.media;
    console.log(media);
    console.log(this.props.type);
    ////////////////
    let player;
    if (filetype === "image") {
      player = (
        <ResponsiveEmbed aspectRatio="16by9">
          <video
            ref={this.myRef}
            poster={media}
            preload="auto"
            onLoadStart={console.log(">>>>>>>>>>>>>>>>>NEW")}
            src={placeholderMedia}
          ></video>
        </ResponsiveEmbed>
      );
    } else if (filetype === "video") {
      player = (
        <ResponsiveEmbed aspectRatio="16by9">
          <video ref={this.myRef} preload="auto" autoPlay controls>
            <source src={media + "#t=0," + this.props.duration} />
          </video>
        </ResponsiveEmbed>
      );
    }

    return <div>{player}</div>;
  }
}

export default Play;
