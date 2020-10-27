export const apiKey = `api_key=${process.env.REACT_APP_TMDB_KEY}`;
export const url = "https://api.themoviedb.org/3/";

const genresUrl = `${url}genre/movie/list?${apiKey}`;



export const fetchGenresRequest = () => {
  return fetch(`${genresUrl}`)
    .then((res) => res.json())
    .then((data) => data.genres)
    .catch(() => {});
};
