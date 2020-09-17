import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useTranslation } from "react-i18next";

const Auth = () => {
  const [err, setErr] = useState(null);
  const history = useHistory();
  const [t] = useTranslation();

  const onSubmit = (values) => {  
    if (!values.login || !values.password) 
    {
      setErr("Fill in all the fields");
      return;
    } 

    let usersInfo = localStorage.getItem("usersData")
    usersInfo = JSON.parse(usersInfo)

    if 
    ( usersInfo.login === values.login && usersInfo.password === values.password ) 
      { history.push("/") } 

    else  { setErr("Data entered incorrectly"); }

  }


  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ login: "", password: "" }}
      render={({ handleSubmit }) => (
        <div className="container mx-auto mt-48 w-full max-w-xs">
          <form
            onSubmit={handleSubmit}
            className=" bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username">
                {t('LoginForm.username')}
                    </label>
              <Field
                name="login"
                component="input"
                type="text"
                autoComplete="current-username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t('LoginForm.username')}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password">
                {t('LoginForm.password')}
                    </label>
              <Field
                name="password"
                component="input"
                type="password"
                autoComplete="current-password"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">{t('LoginForm.choose-pass')}</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                {t('LoginForm.signin')}
                    </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                {t('LoginForm.forgot-pass')}
                    </a>
            </div>
            {err ? (
              <div className="pt-4 text-center">
                <span className="text-red-600 font-light text-sm">
                  {t('LoginForm.err')}
                </span>
              </div>
            ) : null}
          </form>
        </div>
      )}
    />
  )
}

export default Auth;