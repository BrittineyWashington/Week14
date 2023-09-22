//this component will be passed to the MovieList which will then be rendered in the overlay
import React from 'react'; 

//this will return the Add to Favorites text and the xmlns is the "Heart" icon from getbootstrap
//the d='' is a part of the path listed on the http:// listed below
const AddFavorites = () => {
    return (
        <div>
            <span className='mr-2'>Add to Favorites</span>
            <br />
            <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-heart-fill'
                fill='red'
                xmlns='http://www.w3.org/2000/svg'
            >
            <path
                fillRule='evenodd'
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
            </svg>
        </div>
    );
};

export default AddFavorites; 

//<svg> is Scalable Vector Graphics a web-friendly vector file format. (adobe)
//scaled up or down without losing any of its resolution








