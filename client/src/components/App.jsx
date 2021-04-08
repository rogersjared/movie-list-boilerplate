import React from 'react';
import ListDisplay from './ListDisplay.jsx';
import SearchBar from './SearchBar.jsx';

var exampleData = [
  {title: 'Mean Girls', id: 1},
  {title: 'Hackers', id: 2},
  {title: 'The Grey', id: 3},
  {title: 'Sunshine', id: 4},
  {title: 'Ex Machina', id: 5},
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: exampleData,
      displayFilter: null, //filter functions assigned here should be wrapped and already have parameters input. Output array of movie(s)
      searchBarText: ''
    }
    //BIND FUNCS
    this.resetSearchBarText = this.resetSearchBarText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.removeFilterFunction = this.removeFilterFunction.bind(this);
  }

  




  /////////////USER INPUT HANDLERS///////////////
  handleChange(event){
    console.log(event.target.id)
    this.setState({
      [event.target.id]:event.target.value
    });
  }

  handleSearch(event){
    event.preventDefault();
    var searchEntry = this.state.searchBarText;
    this.setState({
      displayFilter: ()=>{return this.searchForTitle(this.state.movieList, searchEntry)}
    }, ()=>{this.resetSearchBarText(); console.log('text was reset')})
  }
  



  ////////////Helper FUNCTIONS//////////////////
  resetSearchBarText () {
    this.setState({
      searchBarText: ''
    })
  }

  removeFilterFunction () {
    this.setState({
      displayFilter: null
    });
  }


  //////////// FILTER FUNCTIONS ////////////////
  searchForTitle (movieList, searchEntry) {
    var matches = [];
    movieList.forEach((movie) => {
      var lcTitle = movie.title.toLowerCase();
      var lcSearch = searchEntry.toLowerCase();
      if (lcTitle.includes(lcSearch)) {
        matches.push(movie);
      }
    })
    return matches;
  }




  //-------------------------------------VIEW--------------------------------------------------------------//
  render() {
    return (
      <div>~~MOVIES~~
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} textEntry={this.state.searchBarText} />
        <ListDisplay movieList={this.state.movieList} filterFunction={this.state.displayFilter} removeFilter={this.removeFilterFunction} />
      </div>
    )
  }
};

export default App;