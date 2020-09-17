import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import {useTranslation} from 'react-i18next'


export const Add = () => {
  
  const {t, i18n} = useTranslation();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          console.log(data)
        } else {
          setResults([]);
        }
      });
  };

  
  const handleClick = () => {
    
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          console.log(data)
        } else {
          setResults([]);
        }
      })
  }



  return (
    <div className="add-page">
      <div className="container">
        <div className="px-56 py-8 m-0">
          <div className="bg-white shadow p-4 flex rounded-full">
            <input
              className="placeholder-gray-500 text-blue-700 text-xl w-full p-1"
              type="text"
              placeholder={t('AddPage.placeholder')}
              value={query}
              onChange={onChange}
            />
          </div>
          <div className="w-24 text-center ">
            <button 
            className="bg-orange-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mt-2"
            onClick={handleClick}>
              POPULAR
            </button>
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
