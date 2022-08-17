import React from "react";
import "../Styles/Phonetic.css";

const Phonetic = (props) => {
  return (
    <div className="Phonetic">
      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
};

export default Phonetic;
