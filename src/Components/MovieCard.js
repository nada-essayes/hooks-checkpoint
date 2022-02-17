import React from 'react';
import {Card,CardContent,CardMedia,Typography }from '@mui/material';
import { CardActionArea } from '@mui/material';
import ReactStars from "react-rating-stars-component";
import { BrowserRouter ,Link} from "react-router-dom";

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

            <Typography gutterBottom variant="h5" component="div">
              <Link to={`/MoviesDescription/${movies.id}`}> More Informations ! </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    );
}
export default MovieCard;