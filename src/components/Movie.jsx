import { Image } from 'react-bootstrap';
import React from 'react';

const Movie = ({ movie }) => {
    return ( 
    <div> 
      <div style={{ textAlign: 'center' }}>
             <p style={{fontFamily:'Engcomica'}}>   {movie.name}  </p>
        </div>
        <div>
           { movie.image && <Image src={movie.image.url}/>}
        </div>
    </div> 
     );
}
 
export default Movie;