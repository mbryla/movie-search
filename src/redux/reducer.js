import {
  FETCHING_MOVIE,
  RECEIVED_MOVIE,
  FAILED_TO_RECEIVE_MOVIE,
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

    case FAILED_TO_RECEIVE_MOVIE:
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