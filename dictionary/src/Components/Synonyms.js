import React from "react";
import "../Styles/Synonyms.css";

const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
};

export default Synonyms;
