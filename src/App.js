import './App.css';
import {useState} from 'react';
import MovieList from './Components/MovieList';
import MovieFilter from './Components/MovieFilter';

function App() {
  const [movies,setMovies]=useState(
    [
      {
        id:1,
        title:'Le Roi lion',
        image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRt0QcP5zVlUaoxyx1xDndKnXQsVfx_HGXQr4sOMH162QhPKfSN",
        description:"Un lionceau nommé Simba est exilé de son royaume après avoir été accusé d'être responsable de la mort de son père, Mufasa. Avec l'aide d'un étrange duo composé d'un suricate et d'un phacochère, il décide de reprendre ce qui lui revient de droit lorsqu'il apprend qu'il est destiné à être roi.",
        year:1994,
        rate:5

      },
      {
        id:2,
        title:"Cendrillon",
        image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEOASK34Sq4L9RqmjB-fVNbVZu4xcYdPwhH3afoE2nqp5krLAJ",
        description:"Cendrillon, une douce jeune fille, subit les méchancetés de sa belle-mère et de ses deux horribles filles. Un jour, transformée par sa marraine la bonne fée en princesse éclatante de beauté, elle se rend au bal du prince qui tombe fou amoureux d'elle...",
        year:1950,
        rate:4
      },
      {
        id:3,
        title:"La Petite Sirène",
        image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOdusL3YZZTUpWY8ZA74FID2Fyho3mJDOTXKfQNSh6vuYB7P9J",
        description:"Ariel, la petite Sirène, a la plus belle voix des océans mais elle ne rêve que du prince Eric et du monde des humains. Ursula, la Sorcière des mers, lui propose un terrible marché. Saura-t-elle se sortir de ses griffes ? Trouvera-t-elle le moyen de réaliser ses rêves ?",
        year:1989,
       
        rate:3
      }
    ]
  )
  const addMovies = (newMovies) => {
    setMovies(movies.concat(newMovies))
  }
  const filterMovies = (movies) => {
   movies.rate=Rating
  }
  const [Rating, setRating] = useState(0);
  const [nameMovie, setNameMovie] = useState("");

  const searchMovies = (nameMovie) => {
    setNameMovie(nameMovie)
  }
  return (
    <div className="App" >
       <div> <MovieFilter rating={Rating} setRating={setRating} nameMovie={nameMovie} setNameMovie={setNameMovie} searchMovies={searchMovies}/></div> 
      <div><MovieList movies={movies} addMovies={addMovies} filterMovies={filterMovies}/></div>
     
    </div>
  );
}

export default App;
