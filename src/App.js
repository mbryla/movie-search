import React, { Component } from 'react';
import './App.css';

import SearchForm from './SearchForm';
import MoviesList from './MoviesList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="search">
          <SearchForm/>
        </header>
        <main>
          <MoviesList/>
        </main>
      </div>
    );
  }
}

export default App;
