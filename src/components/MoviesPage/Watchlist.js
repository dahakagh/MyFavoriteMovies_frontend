import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { MovieCard } from "./MovieCard";
import {useTranslation} from 'react-i18next'


export const Watchlist = () => {
  const {t, i18n} = useTranslation();
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="font-bold text-xl">{t('WatchlistPage.my-watchlist')}</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">{t('WatchlistPage.no-movielist')}</h2>
        )}
      </div>
    </div>
  );
};
