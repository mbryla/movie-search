import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MOVIE_POSTER_FALLBACK = 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Movie_stub_film.svg';
const ERROR_MOVIE_NOT_FOUND = 'Movie not found!';
const ERROR_TOO_MANY_RESULTS = 'Too many results.';

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
    return movies.map(movie => (
      <li key={movie.imdbID} className="movie">
        <img src={movie.Poster === 'N/A' ? MOVIE_POSTER_FALLBACK : movie.Poster } alt={`poster of a movie ${movie.Title}`}/>
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
      </li>)
    );
  }

  getErrorMessage(error, title, releaseYear) {
    switch (error) {
      case ERROR_MOVIE_NOT_FOUND:
        if (title) {
          return releaseYear ?
            `Could not find a movie with a title '${title}' released in ${releaseYear}...` : 
            `Could not find a movie with a title '${title}'...`;
        } else {
          return `We cannot search for movies without a title :(`;
        }

      case ERROR_TOO_MANY_RESULTS:
        return 'That search yielded too many results. Please try to narrow down your search...'
      
      default:
        return 'Unexpected error occurred. Sorry, please try again...';
    }
  }

  renderError() {
    const { fetching: { title, releaseYear, error} } = this.props;
  
    return (
      <div className="error">
        <p>{this.getErrorMessage(error, title, releaseYear)}</p>
      </div>
    )
  }

  render() {
    const { fetching: { title, releaseYear, error } } = this.props;
    return (title || releaseYear) && error ? (
      this.renderError()
    ) : (
      <ul className="movies">
        {this.renderMovies()}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
