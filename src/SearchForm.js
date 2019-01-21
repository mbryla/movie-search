import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovies } from './redux/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchMovie: (title, releaseYear) => {
    dispatch(fetchMovies(title, releaseYear));
  },
});

class SearchForm extends PureComponent {

  static propTypes = {
    dispatchFetchMovie: PropTypes.func.isRequired,
  };

  state = {
    title: '',
    releaseYear: '',
  };

  onTitleChange = (event) => {
    this.setState({
      ...this.state,
      title: event.target.value,
    });
  }

  onYearChange = (event) => {
    this.setState({
      ...this.state,
      releaseYear: event.target.value,
    });
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  onSearch = () => {
    const { dispatchFetchMovie } = this.props;
    const { title, releaseYear } = this.state;
    dispatchFetchMovie(title, releaseYear);
  }

  render() {
    return (
      <div className="search">
        <div>
          <label htmlFor="search-title">Title</label>
          <input id="search-title" name="title" type="text" value={this.state.title} onChange={this.onTitleChange} onKeyPress={this.onKeyPress}/>
        </div>
        <div>
          <label htmlFor="search-year">Release Year</label>
          <input id="search-year" name="release year" type="number" min="1900" max="2019" value={this.state.releaseYear} onChange={this.onYearChange} onKeyPress={this.onKeyPress}/>
        </div>
        <div>
          <label>&nbsp;</label>
          <button type="button" onClick={this.onSearch}>search</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);