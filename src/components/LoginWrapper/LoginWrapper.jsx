import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { reduxForm, Field } from 'redux-form';
import { FieldComponent } from '../common/FormFields/FormFields';
import { login } from './../../redux/auth-reducer';

import s from './loginWrapper.module.css';

import withRedirToMain from '../../hoc/withRedirToMain';


const
    FieldInput = FieldComponent('input');

const Forms = props => {
    const { handleSubmit } = props;
    return (
        <form className={s.loginForm} onSubmit={ handleSubmit }>
            <Field 
                component={FieldInput}
                name={'login'}
                type={'text'}
                placeholder={'login'}
            />
            <Field 
                component={FieldInput}
                name={'password'}
                type={'password'}
                placeholder={'password'}
            />
            <button className={s.btn} type={'submit'}>Войти</button>
            {
                props.error &&
                    <div>Неверный логин или пароль</div>
            }
        </form>
    );
}

const LoginForm = reduxForm({form: 'login'})(Forms);

const LoginWrapper = props => {

    const onSubmit = ({login, password}) => {
        props.login(login, password);
    };

    return (
        <div className={s.main}>
            <h1>Авторизация</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );

}

export default compose(
    connect(null, { login }),
    withRedirToMain,
)(LoginWrapper);