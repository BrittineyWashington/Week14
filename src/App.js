//these are the imported components for our App 
import React, { useState, useEffect} from 'react'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorite';


 const App = () => { 
  const [movies, setMovies] = useState([]); 
  //adding this value to store what user types
  //now that we know what they have typed we need to call the API w/the value
  const [searchValue, setSearchValue] = useState(''); 
  //this state will hold our favorites, whatever the user clicks
  const [favorites, setFavorites] = useState([]); 
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
      }
// };
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
    }

//this will make sure the API call only happens once
//this method will make a all to the API & updts the state if we get results
useEffect(() => {//passes the new searchValue to the getMovieRequest function 
  //accepts parameter of searchValue
  getMovieRequest(searchValue); 
}, [searchValue]); //this is passed in using a template string

//going to save to local storage now
//we use the useEffect hook to retrieve favorites from local storage when app loads
useEffect(() => {
  //JSON.parse is used to convert a JSON object in text format to a JS object that can be used in a program
  const movieFavorites = JSON.parse(
    //localStorage is a window object property, meaning a global object and can interact with and manipulate the browser window
    localStorage.getItem('react-movie-app-favorites')
  );
  if (movieFavorites) {
    setFavorites(movieFavorites); 
        }
}, []); 

//adding function that takes a list of items & will save to local storage against a key 
//key = 'react-movie-app-favorites'
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items)); 
  };
 
//creating this function to accept a movie 
    //will take a copy of current favorite array, add new movie to it and save everything back into state
    //this will then be passed in as a prop(handleFavoriteClick) to our MovieList component
  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie]; //... is the spread operator
      setFavorites(newFavoriteList); 
      //this will save to local storage when we add a favorite movie
      saveToLocalStorage(newFavoriteList);
    }; 

//creating this function to remove a given movie from our favorite state
//we're using the filter function which will return a new array without the movie we want to move
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter((favorite) => favorite.imdbID !== movie.imdbID);

    setFavorites(newFavoriteList);
    //saving to local storage when we remove a favorite movie
    saveToLocalStorage(newFavoriteList);  
  };

//this is creating a state object to hold the list of movies 
//we're going to AddFavorites to our MoveList below as a prop
  return (
    <div className="container-fluid movie-app">
      <h1>
        <img src="https://img.freepik.com/free-vector/firlm-strip-with-camera-cinema-background-vector-illustration_1017-38345.jpg?w=1800&t=st=1695326876~exp=1695327476~hmac=6b59ec60dfcbdf1cc6ba3b8f2c72f3feeff2b84000e8627460022a316b4b0051" alt="Lights, Camera, Action" className='header-image'/>
        Hi Princess!
        </h1>
      <div className='row d-flex align-items-center mt-4 mb-4'>
          {error ? (
            <div className="text-danger">
                We're sorry, but an unexpected error occurred{" "}
            </div>
          ): null}
          {/* added a new row that will hold our components */}
        <SearchBox 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
        />
        </div>
        <div>
        <MovieListHeading heading='Movies List' />
        </div>
      <div className='row d-flex'>
        <MovieList 
            movies={movies} 
            favoriteComponent={AddFavorites} 
            // //this will then be passed in as a prop(handleFavoriteClick) to our MovieList component
            handleFavoriteClick={addFavoriteMovie}
            />
      </div>
      {/* This will be a new heading for our Favorites using MovieListHeading component*/}
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favorites List' />
      </div>
      {/* this will render our favorites using MoveList component  */}
      {/* we are passing in our remove favorite from our remove favorite movie function to the movie list */}
      {/* the MovieList is already coded so we can pass this remove component and it works */}
      <div className='row'>
         <MovieList 
            movies={favorites} 
            handleFavoriteClick={removeFavoriteMovie}
            favoriteComponent={RemoveFavorites} 
            />
      </div>
    </div>
  );
};

export default App; 







//line 







