import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { MovieCard } from "./MovieCard";
import {useTranslation} from 'react-i18next'


export const Watched = () => {

  const {t, i18n} = useTranslation();
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="font-bold text-xl">{t('WatchedPage.heading')}</h1>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">{t('WatchedPage.no-movies')}</h2>
        )}
      </div>
    </div>
  );
};
