import React from 'react';
import {Card,CardContent,CardMedia,Typography }from '@mui/material';
import { CardActionArea } from '@mui/material';
import ReactStars from "react-rating-stars-component";

const MovieCard = ({movies})=>{
    return(
    <div>
 <Card sx={{ maxWidth: 345 }}>

    <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={movies.image}
          alt="movie"
        />
        
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="div">
            {movies.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <ReactStars
                count={5}
                size={24}
                value={movies.rate}
                activeColor="#ffd700"
                edit={false}
                
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movies.description}
          </Typography>
          <Typography variant="body2" gutterBottom variant="h6" color="text.secondary">
            {movies.year}
          </Typography>
        
        </CardContent>
    </CardActionArea>
</Card>
    </div>
    );
}
export default MovieCard;