import React, { useEffect, useState } from 'react';
import {CardContent,Typography }from '@mui/material';


const Description = (props)=>{
  const[movies,setMovies]=useState(null); 
  useEffect(()=> {
    setMovies(props.movies.filter(element =>
      element.id === props.params.match.id)[0])
  })
    return(
    <div>
      {movies && 
      (
        <CardContent>

          <Typography variant="body2" gutterBottom variant="h6" color="text.secondary">
            {movies.description}
          </Typography>

          <Typography variant="body2" gutterBottom variant="h6" color="text.secondary">
            {movies.year}
          </Typography>

        </CardContent>
      
      )}
    </div>
    );
}
export default Description ;