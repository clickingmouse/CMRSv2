import React from "react";
import PropTypes from "prop-types";
import { ResponsiveEmbed } from "react-bootstrap";

export default function MediaPreview(props) {
  const { file, fileUrl } = props.input;
  var filetype = file.type.split("/")[0];
  // console.log(filetype);
  //const { media } = props;
  const onVideoLoaded = e => {
    //    this.props.deleteItem(id);
    console.log(e.target.duration);

    if (filetype === "image") {
      console.log(" image");
      props.setMediaPlayTime(5);
    }

    props.setMediaPlayTime(e.target.duration);
    //setDuration(e.target.duration);
  };
  // if (filetype === "image") {
  //   console.log(" image");
  //   props.setMediaPlayTime(5);
  // } else {
  //   console.log("not image");
  // }
  return (
    <div style={{ width: "auto" }}>
      {filetype === "image" ? (
        <ResponsiveEmbed aspectRatio="16by9">
          <video
            preload="auto"
            poster={fileUrl}
            onLoadedData={onVideoLoaded.bind(this)}
          >
            <track
              id="track"
              default
              label="English"
              kind="captions"
              srcLang="en"
            />
          </video>
        </ResponsiveEmbed>
      ) : (
        <ResponsiveEmbed aspectRatio="16by9">
          <video
            preload="auto"
            controls
            autoPlay
            onLoadedData={onVideoLoaded.bind(this)}
          >
            <source src={fileUrl + "#t=0,5"} type="video/ogg" />
            <track
              id="track"
              default
              label="English"
              kind="captions"
              srcLang="en"
            />
          </video>
        </ResponsiveEmbed>
      )}
    </div>
  );
}

MediaPreview.propTypes = {
  input: PropTypes.object.isRequired
};
