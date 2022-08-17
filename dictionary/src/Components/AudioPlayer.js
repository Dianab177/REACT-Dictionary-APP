import React from "react";
import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = (props) => {
  return (
    <div>
      <ReactAudioPlayer src={props.phonetic.audio} controls />
    </div>
  );
};

export default AudioPlayer;
