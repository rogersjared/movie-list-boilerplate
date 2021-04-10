import React from 'react';





const SearchBar = (props) => {
    var Watched = props.displayWatch.watched;
    var ToWatch = props.displayWatch.toWatch;
    

    const WatchedBtn = () => {
        if (ToWatch) {
            return (<button style={{"background-color":"green"}} >Watched</button>);
        } else {
            return (<button>Watched</button>);
        }

    }

    const ToWatchBtn = () => {
        if (Watched) {
            return (<button style={{"background-color":"green"}} >To Watch</button>);
        } else {
            return (<button>To Watch</button>);
        }  
    }

    return (
        <form onSubmit={props.handleSearch}>
            <input id="searchBarText" type="text" onChange={props.handleChange} placeholder='search for movie title' value={props.textEntry}></input>
            <button type="submit" >Search</button>
            <span>                                                       </span>
            <WatchedBtn />
            <ToWatchBtn />
            
        </form>
    )
}

export default SearchBar;