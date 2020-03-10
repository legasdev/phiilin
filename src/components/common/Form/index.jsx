import React, { useState } from "react";

import s from "./Form.module.less";

const Form = ({ onSubmit }) => {

    const [loginInputText, setLoginInputText] = useState('');
    const [passwordInputText, setPasswordInputText] = useState('');

    function handlerSubmit(event) {
        event.preventDefault();
        onSubmit({
            login: loginInputText,
            password: passwordInputText
        });
    }

    function onLoginChange(event) {
        setLoginInputText(event.currentTarget.value);
    }

    function onPasswordChange(event) {
        setPasswordInputText(event.currentTarget.value);
    }

    return (
        <form className={s.main} onSubmit={handlerSubmit}>
            <input
                type={'text'}
                placeholder={'login'}
                name={'login'}
                value={loginInputText}
                onChange={onLoginChange}
            />
            <input
                type={'password'}
                placeholder={'password'}
                name={'password'}
                value={passwordInputText}
                onChange={onPasswordChange}
            />
            <input type={'submit'} value={'Войти'} />
        </form>
    );
};

export default Form;