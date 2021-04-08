import React from 'react';

const SearchBar = (props) => {
    
    return (
        <form onSubmit={props.handleSearch}>
            <input id="searchBarText" type="text" onChange={props.handleChange} placeholder='search for movie title' value={props.textEntry}></input>
            <button type="submit" >Search</button>
        </form>
    )
}

export default SearchBar;