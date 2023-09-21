import React, { useState, useEffect} from 'react'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import MovieList from './components/MovieList';

export default function App () { 
  const [movies, setMovies] = useState([
  
  //this is hardcoded movies from the API to test code
    //   {
  //     "Title": "The Matrix",
  //     "Year": "1999",
  //     "imdbID": "tt0133093",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  // },
  // {
  //     "Title": "The Matrix Reloaded",
  //     "Year": "2003",
  //     "imdbID": "tt0234215",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  // },
  // {
  //     "Title": "The Matrix Revolutions",
  //     "Year": "2003",
  //     "imdbID": "tt0242653",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  // },
  // {
  //     "Title": "The Matrix Resurrections",
  //     "Year": "2021",
  //     "imdbID": "tt10838180",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
  // },
  ]); 
  const [error, setError] = useState(false);

//useEffect helps make sure the API call only happens the 1st time app loads
  useEffect(() => {
    //this calls the API
    fetch('http://www.omdbapi.com/?s=matrix&apikey=e3f2d506', {
      method: 'GET' //this will read the state of the API
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setMovies(data.Search);
    })
    .catch((response) => {
      console.log('response', response); 
      setError(true); 
    });
  }, []);  
  console.log('movies', movies); 


  return (
    <div className="container-fluid movie-app">
      <h1>Hi Princess, Movie Review!</h1>
      <div className='row d-flex align-items-center mt-4 mb-4'>
          {error ? (
            <div className="text-danger">
                We're sorry, but an unexpected error occurred{" "}
            </div>
          ): null}
          <MovieList movies={movies} />
      </div>
    </div>
  );
};


