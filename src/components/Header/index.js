import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const { t } = useTranslation();

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
            {t("Header.watchlist")}
          </Link>
        </li>

        <li className="mr-6 py-2">
          <Link
            to="/watched"
            className="text-white text-lg hover:text-blue-300"
          >
            {t("Header.watched")}
          </Link>
        </li>

        <li className="mr-6 py-2 ">
          <Link
            to="/add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {t("Header.add")}
          </Link>
        </li>
        <LanguageToggle />
      </ul>
    </div>
  );
};

export default withRouter(Header);
