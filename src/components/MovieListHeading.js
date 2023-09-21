//this will be a component that will add a heading and a search input
//this will let the user search for whatever they want. 

import React from 'react'; 

//this header will accept a prop which will be rendered using Bootstrap
const MovieListHeading = (props) => {
    return (
        //this will be a bootstrap Col
        <div className='col'>
            <h1>{props.heading}</h1>
        </div>
    );
};

export default MovieListHeading; 

//we can reuse this component later if needed