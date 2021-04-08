import React from 'react';

const ListDisplay = (props) => {
    var searching = false
    if (props.filterFunction !== null) {
        var listToDisplay = props.filterFunction();
        searching = true;
    } else {
        var listToDisplay = props.movieList;
    }

    if (listToDisplay.length === 0) {
        return (<div>No movie by that name found</div>)
    }

    if (searching) { return (
        <div>
            <button onClick={props.removeFilter} >Show All Movies</button>
            <ul>
                {listToDisplay.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    )} 


    return (
        <ul>
            {listToDisplay.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
    )
}

export default ListDisplay;