import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovie } from './redux/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchMovie: (title, releaseYear) => {
    dispatch(fetchMovie(title, releaseYear));
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

  onSearch = () => {
    const { dispatchFetchMovie } = this.props;
    const { title, releaseYear } = this.state;
    dispatchFetchMovie(title, releaseYear);
  }

  render() {
    return (
      <div>
        <label htmlFor="search-title">Title</label>
        <input id="search-title" name="title" type="text" value={this.state.title} onChange={this.onTitleChange}/>
        <label htmlFor="search-year">Release Year</label>
        <input id="search-year" name="release year" type="number" min="1900" max="2019" value={this.state.releaseYear} onChange={this.onYearChange}/>
        <button type="button" onClick={this.onSearch}>search</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);