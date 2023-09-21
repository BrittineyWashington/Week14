//component to display the list of movies that come back in the search request
import React from 'react'; 

//list of movies will be passed in as props 
const MovieList = (props) => {
    return (
        //will use the map function to loop over the movies
        //each movie we'll display an image using Poster URL as the image source
        <div>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='movie'></img>
                </div>
            ))}
        </div>
    );
};

export default MovieList; 