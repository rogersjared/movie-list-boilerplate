import React from 'react';
import ListDisplay from './ListDisplay.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

var exampleData = [
  {title: 'Mean Girls', id: 1, watched: false},
  {title: 'Hackers', id: 2, watched: false},
  {title: 'The Grey', id: 3, watched: false},
  {title: 'Sunshine', id: 4, watched: false},
  {title: 'Ex Machina', id: 5, watched: false}
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: exampleData,
      displayFilter: null, //filter functions assigned here should be wrapped and already have parameters input. Output array of movie(s)
      searchBarText: '',
      addMovieTitle: '',
      displayWatch: {watched: false, toWatch: false}
    }
    //BIND FUNCS
    this.resetSearchBarText = this.resetSearchBarText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.removeFilterFunction = this.removeFilterFunction.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.resetAddMovieText = this.resetAddMovieText.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
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

  handleAdd(event) {
    event.preventDefault();
    var currentList = this.state.movieList.slice();
    var newMovie = {
      title: this.state.addMovieTitle,
      id: (this.state.movieList[this.state.movieList.length -1].id) + 1
    }
    currentList.push(newMovie);
    this.setState({
      movieList: currentList
    }, this.resetAddMovieText)
  }
  
  toggleWatched(event) {
    event.preventDefault();
    var currentList = this.state.movieList.slice();
    var target = currentList[event.target.value - 1];
    target.watched = !target.watched;
    this.setState({
      movieList: currentList
    }, ()=>{console.log('after swap', this.state.movieList)})
  }


  ////////////Helper FUNCTIONS//////////////////
  resetSearchBarText () {
    this.setState({
      searchBarText: ''
    })
  }

  resetAddMovieText () {
    this.setState({
      addMovieTitle: ''
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
        <AddMovie handleChange={this.handleChange} textEntry={this.state.addMovieTitle} add={this.handleAdd} />
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} textEntry={this.state.searchBarText} displayWatch={this.state.displayWatch}/>
        <ListDisplay movieList={this.state.movieList} filterFunction={this.state.displayFilter} removeFilter={this.removeFilterFunction} toggleWatched={this.toggleWatched} />
      </div>
    )
  }
};

export default App;