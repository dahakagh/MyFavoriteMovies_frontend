import React, { useEffect } from "react";
import initialUserData from './ToStorage'
import Auth from "./Auth";

const LoginForm = () => {
  useEffect(initialUserData, []);
  return (
    <div className="h-screen bg-gray-100 p-5 relative">
      <Auth/>
    </div>
  );
}

export default LoginForm;