import React from "react";
import { useTranslation } from "react-i18next";

const SignInButton = () => {
    const [t] = useTranslation()

  return (
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        {t("LoginForm.signin")}
      </button>
      <a
        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        href="#"
      >
        {t("LoginForm.forgot-pass")}
      </a>
    </div>
  );
};

export default SignInButton;    
