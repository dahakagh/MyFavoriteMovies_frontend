import React from "react";
import { Field } from "react-final-form";
import { useTranslation } from "react-i18next";

const PasswordField = () => {
  const [t] = useTranslation();

  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="password"
      >
        {t("LoginForm.password")}
      </label>
      <Field
        name="password"
        component="input"
        type="password"
        autoComplete="current-password"
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="******************"
      />
      <p className="text-red-500 text-xs italic">
        {t("LoginForm.choose-pass")}
      </p>
    </div>
  );
};

export default PasswordField