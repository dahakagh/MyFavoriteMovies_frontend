import React from "react";
import { useTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";

const Logout = ({ history }) => {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    history.push("/signin");
  };

  const { t } = useTranslation();

  return (
    <span
      className="text-2xl font-semibold mr-4 text-blue-900 hover:text-red-600"
      onClick={logout}
    >
      Logout
    </span>
  );
};

export default withRouter(Logout);