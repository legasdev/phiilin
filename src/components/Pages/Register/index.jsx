import React, {useEffect, useState, useCallback} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {register} from "../../../redux/auth-reducer";

import s from "./Register.module.less";

import Form from "@src/components/common/Form";

import useRedirectToLastPage from "../../../hooks/useRedirectToLastPage";
import Input from "../../common/Form/Input";
import Button from "../../common/Button";

const RegPage = ({ register }) => {

    const
        lastPage = useRedirectToLastPage();

    const
        [loginField, setLoginField] = useState(''),
        [nameField, setNameField] = useState(''),
        [emailField, setEmailField] = useState(''),
        [telField, setTelField] = useState(''),
        [groupNumber, setGroupNumber] = useState(''),
        [passwordField, setPasswordField] = useState('');

    const
        onChangeLogin = useCallback((event) => {
            setLoginField(event.target.value);
        }, []),
        onChangeName = useCallback((event) => {
            setNameField(event.target.value);
        }, []),
        onChangeEmail = useCallback((event) => {
            setEmailField(event.target.value);
        }, []),
        onChangeTel = useCallback((event) => {
            setTelField(event.target.value);
        }, []),
        onChangeGroupNumber = useCallback((event) => {
            setGroupNumber(event.target.value);
        }, []),
        onChangePassword = useCallback((event) => {
            setPasswordField(event.target.value);
        }, []),
        onSubmit = useCallback(() => {
            register(loginField, nameField, emailField, telField, groupNumber, passwordField);
            setLoginField('');
            setNameField('');
            setEmailField('');
            setTelField('');
            setGroupNumber('');
            setPasswordField('');
        }, [register, loginField, nameField, emailField, telField, groupNumber, passwordField]);

    useEffect(() => {
        document.title = 'Регистрация | SLR Project';
    });

    return (
        lastPage ||
        <div className={s.main}>
            <div className={s.wrapper}>
                <h1 className={s.title}>Регистрация</h1>
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
                        name={'name'}
                        label={'ФИО'}
                        type={'text'}
                        onChange={onChangeName}
                        value={nameField}
                    />
                    <Input
                        name={'email'}
                        label={'Email'}
                        type={'email'}
                        onChange={onChangeEmail}
                        value={emailField}
                    />
                    <Input
                        name={'tel'}
                        label={'Телефон'}
                        type={'tel'}
                        onChange={onChangeTel}
                        value={telField}
                    />
                    <select
                        name={'groupNumber'}
                        value={groupNumber}
                        onChange={onChangeGroupNumber}
                        style={{
                            width: '100%'
                        }}
                    >
                        <option value="">===[ Выберите номер группы ]===</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <Input
                        name={'password'}
                        label={'Пароль'}
                        type={'password'}
                        onChange={onChangePassword}
                        value={passwordField}
                    />
                    <Button type={'submit'}>Зарегистрироваться</Button>
                </Form>
                <NavLink
                    to={'/login'}
                    className={`${s.link}`}>
                    <span>Войти</span>
                </NavLink>
            </div>
        </div>
    );
};

export default connect(null, { register })(RegPage);