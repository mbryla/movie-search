import { API_ADDRESS } from './config';

export function getMovie(title, releaseYear = '') {
  let address = `${API_ADDRESS}&t=${title}`;
  if (releaseYear) {
    address += `&y=${releaseYear}`;
  }

  return fetch(address).then(response => response.json());
}

export function getMovies(titleSearchString, releaseYear = '', page = 1) {
  let address = `${API_ADDRESS}&s=${titleSearchString}&page=${page}`;
  if (releaseYear) {
    address += `&y=${releaseYear}`;
  }

  return fetch(address).then(response => response.json());
}
