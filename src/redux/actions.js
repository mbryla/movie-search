import { getMovie, getMovies } from '../api';

export const FETCHING_MOVIE = 'FETCHING_MOVIE';
export const RECEIVED_MOVIE = 'RECEIVED_MOVIE';
export const FAILED_TO_RECEIVE_MOVIE = 'FAILED_TO_RECEIVE_MOVIE';

export const FETCHING_MOVIES = 'FETCHING_MOVIES';
export const RECEIVED_MOVIES = 'RECEIVED_MOVIES';
export const FAILED_TO_RECEIVE_MOVIES = 'FAILED_TO_RECEIVE_MOVIES';

export function fetchMovie(title, releaseYear) {
  return (dispatch) => {
    dispatch(fetchingMovie(title, releaseYear));
    getMovie(title, releaseYear).then(result => {
      if (result.Error) {
        return dispatch(failedToReceiveMovie(result.Error));
      }
      return dispatch(receivedMovie(result))
    }).catch(error => 
      dispatch(failedToReceiveMovie(error))
    );
  }
}

function fetchingMovie(title, releaseYear) {
  return {
    type: FETCHING_MOVIE,
    title,
    releaseYear,
  }
}

export function receivedMovie(movie) {
  return {
    type: RECEIVED_MOVIE,
    movie,
  };
}

export function failedToReceiveMovie(error) {
  return {
    type: FAILED_TO_RECEIVE_MOVIE,
    error,
  };
}

export function fetchMovies(title, releaseYear) {
  return (dispatch) => {
    dispatch(fetchingMovies(title, releaseYear));
    getMovies(title, releaseYear).then(result => {
      if (result.Error) {
          return dispatch(failedToReceiveMovies(result.Error));
      }
      return dispatch(receivedMovies(result.Search));
    }).catch(error =>
      dispatch(failedToReceiveMovies(error))
    );
  }
}

function fetchingMovies(title, releaseYear) {
  return {
    type: FETCHING_MOVIES,
    title,
    releaseYear,
  }
}

export function receivedMovies(movies) {
  return {
    type: RECEIVED_MOVIES,
    movies,
  };
}

export function failedToReceiveMovies(error) {
  return {
    type: FAILED_TO_RECEIVE_MOVIES,
    error,
  };
}
