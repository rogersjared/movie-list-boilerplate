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
      displayFilter: null,
      searchBar: ''
    }
    //BIND FUNCS
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    console.log(event.target.id)
    this.setState({
      [event.target.id]:event.target.value
    });
  }
  
  //////////// FILTER FUNCTIONS ////////////////
  searchForTitle () {
    
  }


  render() {
    return (
      <div>~~MOVIES~~
        <SearchBar handleChange={this.handleChange} />
        <ListDisplay movieList={this.state.movieList} filterFunction={this.state.displayFilter}/>
      </div>
    )
  }
};

export default App;