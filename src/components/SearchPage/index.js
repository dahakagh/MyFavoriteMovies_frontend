import React, { useEffect, useState } from "react";
import { ResultCard } from "./ResultCard/ResultCard";
import { useTranslation } from "react-i18next";
import "./SearchPageStyles.css";
import {
  fetchGenresRequest,
  fetchNowPlayingRequest,
  fetchPopularRequest,
  fetchTopRatedRequest,
  fetchUpComingRequest,
} from "../../api";
import Header from "../Header";

export const Add = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [popular, setPopular] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(false);
  const [upcoming, setUpcoming] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      setGenres(await fetchGenresRequest());
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      setResults(await fetchPopularRequest());
    };
    if (popular) {
      fetchAPI();
      setPopular(false);
    }
  }, [popular]);

  useEffect(() => {
    const fetchAPI = async () => {
      setResults(await fetchTopRatedRequest());
    };
    if (topRated) {
      fetchAPI();
      setTopRated(false);
    }
  }, [topRated]);

  useEffect(() => {
    const fetchAPI = async () => {
      setResults(await fetchNowPlayingRequest());
    };
    if (nowPlaying) {
      fetchAPI();
      setNowPlaying(false);
    }
  }, [nowPlaying]);

  useEffect(() => {
    const fetchAPI = async () => {
      setResults(await fetchUpComingRequest());
    };
    if (upcoming) {
      fetchAPI();
      setUpcoming(false);
    }
  }, [upcoming]);

  const clickOnGenre = (e) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${e}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          console.log(data);
        } else {
          setResults([]);
        }
      });
  };

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
          console.log(data);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="add-page">
        <div className="container">
          <div className="px-32 py-8 m-0">
            <div className="bg-white shadow p-4 flex rounded-full">
              <input
                className="placeholder-gray-500 text-blue-700 text-xl w-full p-1"
                type="text"
                placeholder={t("AddPage.placeholder")}
                value={query}
                onChange={onChange}
              />
            </div>
            <div className="px-32 py-2 text-center">
              <button
                className="bg-orange-300 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full mt-2"
                onClick={() => setPopular(!popular)}
              >
                POPULAR
              </button>
              <button
                className="bg-orange-300 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full mt-2"
                onClick={() => setTopRated(!topRated)}
              >
                Top Rated
              </button>
              <button
                className="bg-orange-300 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full mt-2"
                onClick={() => setNowPlaying(!nowPlaying)}
              >
                Now Playing
              </button>
              <button
                className="bg-orange-300 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full mt-2"
                onClick={() => setUpcoming(!upcoming)}
              >
                Upcoming
              </button>
            </div>
            <div>
              <ul className="text-left">
                <h1 className="text-xl font-semibold mt-3">Select genres</h1>
                {genres.map((genre) => (
                  <button
                    onClick={(e) => clickOnGenre(genre.id, e)}
                    className="bg-blue-300 hover:bg-blue-700 text-black font-semibold py-2 px-4 rounded-full mt-2 mr-1"
                    key={genre.id}
                  >
                    {genre.name}
                  </button>
                ))}
              </ul>
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
    </div>
  );
};
