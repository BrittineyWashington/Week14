//component to display the list of movies that come back in the search request
import React from 'react'; 

//list of movies will be passed in as props 
const MovieList = (props) => {
//this is taken from props & assigned a variable
    const FavoriteComponent = props.favoriteComponent; 
    return (
        //will use the map function to loop over the movies
        //each movie we'll display an image using Poster URL as the image source
        //image-container will allow us to add zoom effect
        //the overlay will show when the user hovers over
        //by adding Favorite Component in the div it will render in the overlay
        <>
            {/* passing the current map function movie on to the handleFavoriteClick function */}
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-center m-3'>
                    <img src={movie.Poster} className="p-5 d-flex justify-content-center" alt='movie'></img>
                    <div 
                    // this just adds the function to an onClick property in the overlay
                        onClick={() => props.handleFavoriteClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'>
                        <FavoriteComponent />
                       </div> 
                </div>
            ))}
        </>
    );                                                                                                                        
};

export default MovieList; 
//overlay: d-flex align-items-center justify-content-center