import React from 'react';
import "../Styles/Phonetic.css";

const Phonetic = (props) => {
  return (
    <div className='Phonetic'>
      <a href={props.phonetic.audio} target='_blank'rel="noreferrer">Listen</a>
      <span className='text'> {props.phonetic.text}</span>
     
    </div>
  );
}

export default Phonetic