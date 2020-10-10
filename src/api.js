const apiKey = `api_key=${process.env.REACT_APP_TMDB_KEY}`;
const url = "https://api.themoviedb.org/3/";

const genresUrl = `${url}genre/movie/list?${apiKey}`;
const popularUrl = `${url}movie/popular?${apiKey}`;
const topRatedUrl = `${url}movie/top_rated?${apiKey}`;
const nowPlayingUrl = `${url}movie/now_playing?${apiKey}`;
const upComingUrl = `${url}movie/upcoming?${apiKey}`;

export const fetchGenresRequest = () => {
  return fetch(`${genresUrl}`)
    .then((res) => res.json())
    .then((data) => data.genres)
    .catch(() => {});
};

export const fetchPopularRequest = () => {
  return fetch(`${popularUrl}`)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch(() => {});
};

export const fetchTopRatedRequest = () => {
  return fetch(`${topRatedUrl}`)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch(() => {});
};

export const fetchNowPlayingRequest = () => {
  return fetch(`${nowPlayingUrl}`)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch(() => {});
};

export const fetchUpComingRequest = () => {
  return fetch(`${upComingUrl}`)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch(() => {});
};