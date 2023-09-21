//these are the imported components for our App 

import React, { useState, useEffect} from 'react'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';


 const App = () => { 
  const [movies, setMovies] = useState([]); 
  //adding this value to store what user types
  const [searchValue, setSearchValue] = useState(''); 
  //now that we know what they have typed we need to call the API w/the value
  const [error, setError] = useState(false);

//need to know what the user has typed so we can send to API
//useEffect helps make sure the API call only happens the 1st time app loads
//lets us unsubscribe from listeners that we might have created by returning a function at the end 

const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e3f2d506`; 

  const response = await fetch(url); 
  const responseJson = await response.json(); 

  if (responseJson.Search) {
    setMovies(responseJson.Search);
      };

  const promise = new Promise((resolve, setError) => {
    setTimeout(() => {
      resolve('Success!'); 
       }, 1000); 
    });
      //this will be our try/catch error method to handleErrors
    promise.then((value) => {
        console.log(value); 
      }).catch((error) => {
        console.log(error); 
        setError(true);
      }); 
    };

useEffect(() => {
  getMovieRequest(searchValue); 
}, [searchValue]); 


  // useEffect((searchValue) => {
  //   //this calls the API
  //   fetch(`http://www.omdbapi.com/?s=matrix&apikey=e3f2d506`, {
  //     method: 'GET' //this will read the state of the API
  //   })
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((data) => {
  //     setMovies(data.Search);
  //   })
  //   .catch((response) => {
  //     console.log('response', response); 
  //     setError(true); 
  //   });
  // }, [searchValue]);  
  // console.log('movies', movies); 


  return (
    <div className="container-fluid movie-app">
      <h1>Hi Princess!</h1>
      <div className='row d-flex align-items-center mt-4 mb-4'>
          {error ? (
            <div className="text-danger">
                We're sorry, but an unexpected error occurred{" "}
            </div>
          ): null}
          {/* added a new row that will hold our components */}
        <MovieListHeading heading='Movies List' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App; 

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














