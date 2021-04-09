import React from 'react';

const MovieEntry = (props) => {

    if (props.movie.watched) {
        return (
            <li>
                {props.movie.title}
                <button onClick={props.toggleWatched} style={{"background-color":"green"}} value={props.movie.id}>Watched</button>
            </li>
        )
    } else {
        return (
            <li>
                {props.movie.title}
                <button onClick={props.toggleWatched} value={props.movie.id}>Watched</button>
            </li>
        )
    }

}

export default MovieEntry;