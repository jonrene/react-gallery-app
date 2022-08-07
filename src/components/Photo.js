// imports react
import React from 'react';

// Component used to show a photo
const Photo = (props) =>{
  
  return (
      <li>
          <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
      </li>
  );
}

export default Photo;
