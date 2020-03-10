import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useLastLocation } from "react-router-last-location";

function useRedirectToLastPage() {

    const isAuth = useSelector(state => state.auth.isAuth);
    const lastPage = useLastLocation();

    if (isAuth) return <Redirect to={lastPage ? lastPage.pathname : '/'} />;
    return void 0;
}

export default useRedirectToLastPage;