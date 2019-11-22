import React from 'react';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { reduxForm, Field } from 'redux-form';
import { renderInput } from '../common/FormFields/FormFields';
import { login } from '../../redux/auth-reducer';

import s from './loginWrapper.module.css';

import withRedirToMain from '../../hoc/withRedirToMain';
import { maxSymbols, requiredField } from '../../utils/validators/validators';


const
    vMaxSymbols = maxSymbols(20),
    vRequired = requiredField('Вы не заполнили это поле');

const Form = props => {
    const { handleSubmit } = props;
    return (
        <form className={s.loginForm} onSubmit={ handleSubmit }>
            <h2 className={s.loginTitle}>Авторизация</h2>
            <Field 
                component={renderInput}
                name={'login'}
                type={'text'}
                id={'login'}
                labeltext={'Логин'}
                validate={[vRequired, vMaxSymbols]}
            />
            <Field 
                component={renderInput}
                name={'password'}
                type={'password'}
                id={'password'}
                labeltext={'Пароль'}
                validate={[vRequired]}
            />
            <button className={s.btn} type={'submit'}>Войти</button>
            {
                props.error &&
                    <div className={s.errorMsg}>Неверный логин или пароль</div>
            }
        </form>
    );
}

const LoginForm = reduxForm({form: 'login'})(Form);

const LoginWrapper = props => {

    const onSubmit = ({login, password}) => {
        props.login(login, password);
    };

    return (
        <div className={s.main}>
            <LoginForm onSubmit={onSubmit} />
            <NavLink to={'/registration'} className={s.regLink}>Регистрация</NavLink>
        </div>
    );

}

export default compose(
    connect(null, { login }),
    withRedirToMain,
)(LoginWrapper);