// imports necessary libraries and components
import React, { useEffect } from 'react';
import Photo from './Photo';
import { Outlet, useParams} from 'react-router';

// Component used to display multiple photos. (photo container)
const PhotoGallery = (props) => {
  // gets current query/search from URL
  const {query} = useParams();

  // detects if there is a change in query from url 
  useEffect(()=>{
    props.queryChange(query);
  },[query,props])

  // renders list of photos to screen
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
          {props.photos.map(photo =><Photo server={photo.server} id={photo.id} key={photo.id} secret={photo.secret}/>)}
      </ul>
      <Outlet />
    </div>
  );
  

}

export default PhotoGallery;
