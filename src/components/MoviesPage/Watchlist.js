import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { MovieCard } from "./MovieCard/MovieCard";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./WatchlistStyles.css"

export const Watchlist = () => {
  const { t } = useTranslation();
  const { watchlist } = useContext(GlobalContext);
  const [selectGenre, setSelectGenre] = useState([]);
  const arr = [];

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setSelectGenre(data.genres);
          console.log(data);
        } else {
          setSelectGenre([]);
        }
      });
  }, []);

  const chooseGenres = (e) => {
    arr.push(e);
    console.log(arr);
    localStorage.setItem("choosenGenres", JSON.stringify(arr));
  };


  const username = JSON.parse(localStorage.getItem('user')).login


  return (
    <div className="movie-page">
      <div className="text-right">
        <p className="text-2xl mr-4 font-semibold">Hello, {username}</p>
        <NavLink
          exact
          to="/signin"
          className="text-2xl font-semibold mr-4 text-blue-900 hover:text-red-600"
        >
          Logout
        </NavLink>
      </div>
      <div className="container">
        <h1 className="font-bold text-xl mt-2 mb-4">
          Choose your favourite genres:
        </h1>

        <div>
          <ul className="text-left">
            {selectGenre.map((genre) => (
              <button
                onClick={(e) => chooseGenres(genre.id, e)}
                className="bg-blue-300 hover:bg-blue-700 text-black font-semibold py-2 px-4 rounded-full mt-2 mr-1"
                key={genre.id}
              >
                {genre.name}
              </button>
            ))}
          </ul>
        </div>
        <div className="header mt-8">
          <h1 className="font-bold text-xl">
            {t("WatchlistPage.my-watchlist")}
          </h1>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">{t("WatchlistPage.no-movielist")}</h2>
        )}
      </div>
    </div>
  );
};
