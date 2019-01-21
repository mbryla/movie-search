import {
  FETCHING_MOVIE,
  RECEIVED_MOVIE,
  FAILED_TO_RECEIVE_MOVIE,
  FETCHING_MOVIES,
  RECEIVED_MOVIES,
  FAILED_TO_RECEIVE_MOVIES,
} from './actions';

const INITIAL_STATE = {
  movies: [],
  fetching: {
    error: '',
    title: '',
    releaseYear: '',
  },
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCHING_MOVIE:
      // intentional fall-through
    case FETCHING_MOVIES:
      return {
        ...INITIAL_STATE,
        fetching: {
          error: '',
          title: action.title,
          releaseYear: action.releaseYear,
        },
      };

    case RECEIVED_MOVIE:
      return {
        ...state,
        movies: action.movie === null ? [] : [action.movie],
      };

    case RECEIVED_MOVIES:
      return {
        ...state,
        movies: action.movies === null ? [] : action.movies,
      };

    case FAILED_TO_RECEIVE_MOVIE:
      // intentional fall-through
    case FAILED_TO_RECEIVE_MOVIES:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          error: action.error,
        },
      };

    default:
      return state;
  }
}