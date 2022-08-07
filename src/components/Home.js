// preprocessor directives
// imports react library and photo component
import React from 'react';
import Photo from './Photo';

// Application Home component
const Home = (props) =>{
  return (
      <div className="photo-container">
      <h2>Results</h2>
      <ul>
          {/* renders passed in photos prop to screen */}
          {props.photos.map(photo =><Photo server={photo.server} id={photo.id} key={photo.id} secret={photo.secret}/>)}
      </ul>
    </div>
  );
  
}

export default Home;