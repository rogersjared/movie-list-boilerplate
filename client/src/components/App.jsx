import React from 'react';
import ListDisplay from './ListDisplay.jsx';

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
      displayFilter: null
    }
  }


  render() {
    return (
      <div>~~MOVIES~~
        
        <ListDisplay movieList={this.state.movieList} filterFunction={this.state.displayFilter}/>
      </div>
    )
  }
};

export default App;