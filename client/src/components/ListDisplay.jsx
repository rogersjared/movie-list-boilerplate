import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const ListDisplay = (props) => {
    console.log('props in display', props)
    var searching = false
    if (props.filterFunction !== null) {
        searching = true;
        var listToDisplay = props.filterFunction();
    } else {
        var listToDisplay = props.movieList;
    }

    if (listToDisplay.length === 0) {
        return (<div>
                    <button onClick={props.removeFilter} >Show All Movies</button>
                    <div>No movie by that name found</div>
                </div>)
    }

    if (searching) { return (
        <div>
            <button onClick={props.removeFilter} >Show All Movies</button>
            <ul>
                {listToDisplay.map((movie) => (
                    <MovieEntry movie={movie} toggleWatched={props.toggleWatched} />
                ))}
            </ul>
        </div>
    )} 


    return (
        <ul>
            {listToDisplay.map((movie) => (
                <MovieEntry movie={movie} toggleWatched={props.toggleWatched} />
            ))}
        </ul>
    )
}

export default ListDisplay;