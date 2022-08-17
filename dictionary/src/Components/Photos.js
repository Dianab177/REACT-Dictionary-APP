import React from "react";
import "../Styles/Photos.css";

const Photos = (props) => {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <a href={photo.src.original} target="_blank">
                <img src={photo.src.landscape} alt={props.defaultKeyWord} className='img-fluid'/>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Photos;
