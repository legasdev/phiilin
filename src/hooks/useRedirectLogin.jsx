import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function useRedirectToLogin() {
    const isAuth = useSelector(state => state.auth.isAuth);
    if (!isAuth) return <Redirect to={'/login'} />;
    return !isAuth;
}

export default useRedirectToLogin;