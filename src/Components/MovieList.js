import React from 'react';
import MovieCard from './MovieCard';
import AddMovies  from './AddMovies';


const MovieList = ({movies,addMovies})=>{
    return(
    <div  style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      
       
        {movies.map
           ((movies,key)=><MovieCard movies={movies} key={key}/>
        )}
       
       <div> <AddMovies addMovies={addMovies}/> </div>
    
    
    
    </div>
    );
}
export default MovieList;