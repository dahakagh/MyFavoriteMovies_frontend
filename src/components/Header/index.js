import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex justify-between items-center py-4 bg-blue-900">
      <Link
        to="/"
        className="ml-56 text-4xl text-blue-200 font-extrabold hover:text-red-500"
      >
        Favorite Movies
      </Link>

      <ul className="hidden md:flex overflow-x-hidden mr-56 font-extrabold">
        <li className="mr-6 py-2">
          <Link to="/" className="text-white text-lg hover:text-blue-300">
            {t("Index.watchlist")}
          </Link>
        </li>

        <li className="mr-6 py-2">
          <Link
            to="/watched"
            className="text-white text-lg hover:text-blue-300"
          >
            {t("Index.watched")}
          </Link>
        </li>

        <li className="mr-6 py-2 ">
          <Link
            to="/add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {t("Index.add")}
          </Link>
        </li>
        <div className="">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => handleClick("en")}
          >
            EN
          </button>

          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={() => handleClick("ru")}
          >
            RU
          </button>
        </div>
      </ul>
    </div>
  );
};

export default withRouter(Header);
