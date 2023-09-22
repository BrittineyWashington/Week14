//this will be a component to add the SearchBox

import React from 'react'; 

//takes a value from props
const SearchBox = (props) => {

    //this will render an input
    return (
        //when user types, calls a function it will updt value
        <div className='col col-sm-3'>
            <input
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Type to search...'
            ></input>
        </div>
    );
};

export default SearchBox; 