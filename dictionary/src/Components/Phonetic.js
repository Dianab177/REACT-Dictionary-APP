import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "../Styles/Phonetic.css";

const Phonetic = (props) => {
  return (
    <div className="Phonetic">
      <div className="text"> {props.phonetic.text}</div>
      <ReactAudioPlayer src={props.phonetic.audio} controls className="audio" />
    </div>
  );
};

export default Phonetic;
