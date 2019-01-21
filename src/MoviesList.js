import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  movies: state.movies,
  fetching: state.fetching,
});

const mapDispatchToProps = () => ({});

class MoviesList extends PureComponent {

  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetching: PropTypes.object.isRequired,
  };

  renderMovies() {
    const { movies } = this.props;
    console.log(movies);
    return movies.map(movie => (
      <li key={movie.imdbID} className="movie">
        <img src={movie.Poster}/>
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
      </li>)
    );
  }

  render() {
    return (
      <ul className="movies">
        {this.renderMovies()}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
