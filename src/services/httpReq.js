const API_KEY = process.env.REACT_APP_KEY;
const baseUrl = "https://api.themoviedb.org/3/";


export const mostPopular = () => {
    
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
};


export const Genres = () => {
    return fetch(`${baseUrl}genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
};

