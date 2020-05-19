import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import s from "./Login.module.less";

import Form from "@src/components/common/Form";

import { login } from "@src/redux/auth-reducer";
import useRedirectToLastPage from "../../../hooks/useRedirectToLastPage";
import Input from "../../common/Form/Input";
import Button from "../../common/Button";
import {NavLink} from "react-router-dom";

const LoginPage = ({ login }) => {

    const lastPage = useRedirectToLastPage();
    const [loginField, setLoginField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    useEffect(() => {
        document.title = 'Авторизация | SLR Project';
    });

    function onChangeLogin(event) {
        setLoginField(event.target.value);
    }

    function onChangePassword(event) {
        setPasswordField(event.target.value);
    }

    function onSubmit(data) {
        login(data);
    }

    return (
        lastPage ||
        <div className={s.main}>
            <h1 className={s.title}>Авторизация</h1>
            <Form
                onSubmit={onSubmit}
            >
                <Input
                    name={'login'}
                    label={'Логин'}
                    type={'email'}
                    onChange={onChangeLogin}
                    value={loginField}
                />
                <Input
                    name={'password'}
                    label={'Пароль'}
                    type={'password'}
                    onChange={onChangePassword}
                    value={passwordField}
                />
                <Button type={'submit'}>Войти</Button>
            </Form>
            <NavLink
                to={'/registration'}
                className={`${s.link}`}>
                <span>Регистрация</span>
            </NavLink>
        </div>
    );
};

export default connect(null, { login })(LoginPage);