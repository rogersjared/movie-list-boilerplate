import React from 'react';

const AddMovie = (props) => {
    return (
        <form onSubmit={props.add}>
            <input id="addMovieTitle" type="text" onChange={props.handleChange} placeholder="new movie title" value={props.textEntry}></input>
            <button type="submit">Add Movie</button>
        </form>
    )
}

export default AddMovie;