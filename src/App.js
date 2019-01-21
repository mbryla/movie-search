import React, { Component } from 'react';

import SearchForm from './SearchForm';
import MoviesList from './MoviesList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchForm/>
        <MoviesList/>
      </div>
    );
  }
}

export default App;
