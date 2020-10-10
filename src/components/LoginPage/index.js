import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-final-form";
import { useTranslation } from "react-i18next";
import EmailField from "./components/EmailField";
import PasswordField from "./components/PasswordField";
import SignInButton from "./components/SignInButton";
import SignInHeader from "../SignInHeader";

const SignIn = () => {
  const [err, setErr] = useState(null);
  const history = useHistory();
  const [t] = useTranslation();

  const onSubmit = (values) => {
    if (!values.login || !values.password) {
      setErr("Fill in all the fields");
      return;
    }

    let usersInfo = localStorage.getItem("user");
    usersInfo = JSON.parse(usersInfo);

    if (
      usersInfo.login === values.login &&
      usersInfo.password === values.password
    ) {
      localStorage.setItem('currentUser', values.login)
      history.push("/main");
    } else {
      setErr("Data entered incorrectly");
    }
  };

  if (localStorage.getItem('currentUser')) {
      history.push("/main")
  }


  return (
    <div>
      <SignInHeader/>
      <Form
        onSubmit={onSubmit}
        initialValues={{ login: "", password: "" }}
        render={({ handleSubmit }) => (
          <div className="container mx-auto mt-48 w-full max-w-xs">
            <form
              onSubmit={handleSubmit}
              className=" bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4"
            >
              <EmailField />
              <PasswordField />
              <SignInButton />

              {err ? (
                <div className="pt-4 text-center">
                  <span className="text-red-600 font-light text-sm">
                    {t("LoginForm.err")}
                  </span>
                </div>
              ) : null}
            </form>
          </div>
        )}
      />
    </div>
  );
};

export default SignIn;
