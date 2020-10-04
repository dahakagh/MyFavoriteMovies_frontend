import React from "react";
import { Field } from "react-final-form";
import { useTranslation } from "react-i18next";

const EmailField = () => {
  const [t] = useTranslation();

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        {t("LoginForm.username")}
      </label>
      <Field
        name="login"
        component="input"
        type="text"
        autoComplete="current-username"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={t("LoginForm.username")}
      />
    </div>
  );
};

export default EmailField;
