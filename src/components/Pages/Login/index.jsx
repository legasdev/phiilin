import React from "react";
import {connect} from "react-redux";

import s from "./Login.module.less";

import Form from "@src/components/common/Form";

import { login } from "@src/redux/auth-reducer";
import useRedirectToLastPage from "../../../hooks/useRedirectToLastPage";

const LoginPage = ({ login }) => {

    const lastPage = useRedirectToLastPage();

    function onSubmit(data) {
        login(data);
    }

    return (
        lastPage ||
        <div className={s.main}>
            <h1>Логин</h1>
            <Form onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(null, { login })(LoginPage);