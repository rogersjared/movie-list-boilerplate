import React from 'react';

const ListDisplay = (props) => {

    if (props.filterFunction !== null) {
        var listToDisplay = filterFunction(props.movieList)
    } else {
        var listToDisplay = props.movieList;
    }


    return (
        <ul>
            {listToDisplay.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
    )
}

export default ListDisplay;