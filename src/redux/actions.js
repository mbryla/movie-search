import { getMovie } from '../api';

export const FETCHING_MOVIE = 'FETCHING_MOVIE';
export const RECEIVED_MOVIE = 'RECEIVED_MOVIE';
export const FAILED_TO_RECEIVE_MOVIE = 'FAILED_TO_RECEIVE_MOVIE';

export function fetchMovie(title, releaseYear) {
  return (dispatch) => {
    dispatch(fetchingMovie(title, releaseYear));
    getMovie(title, releaseYear).then(result => {
        if (result.Error) {
          if (result.Error === 'Movie not found!') {
            return dispatch(receivedMovie(null));
          } else {
            return dispatch(failedToReceiveMovie(result.Error));
          }
        }
        return dispatch(receivedMovie(result))
      }
    ).catch(error => 
      dispatch(failedToReceiveMovie(error))
    );
  }
}

function fetchingMovie(title, year) {
  return {
    type: FETCHING_MOVIE,
    title,
    year,
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
