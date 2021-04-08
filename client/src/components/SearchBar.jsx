import React from 'react';

const SearchBar = (props) => {
    
    return (
        <form>
            <input id="searchBar" type="text" onChange={props.handleChange} placeholder='search for movie title' ></input>
        </form>
    )
}

export default SearchBar;