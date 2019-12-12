import React from 'react';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { login, setError } from '../../redux/auth-reducer';

import s from './loginWrapper.module.css';

import withRedirToMain from '../../hoc/withRedirToMain';

import { Form, Field } from 'react-final-form';
import { renderInput } from '../common/FormFields/FormFields';
import { maxSymbols, requiredField } from '../../utils/validators/validators';
import { getLoginError } from '../../redux/selectors/form-selectors';
import { composeValidators } from './../../utils/form-helper';
import Portal from '../common/Portal/Portal';

const
    vMaxSymbols = maxSymbols(20),
    vRequired = requiredField('Вы не заполнили это поле');

const FormLogin = ({ onSubmit, submitError, onPortalClose }) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={ ({ handleSubmit }) => (
                <form className={s.loginForm} onSubmit={handleSubmit}>
                    <h2 className={s.loginTitle}>Авторизация</h2>
                    <Field
                        name={"login"}
                        component={renderInput}
                        type={"text"}
                        labeltext={'Логин'}
                        validate={composeValidators(vRequired, vMaxSymbols)}
                    />
                    <Field
                        name={"password"}
                        component={renderInput}
                        type={"password"}
                        labeltext={'Пароль'}
                        validate={composeValidators(vRequired)}
                    />
                    <button className={s.btn} type={'submit'}>Войти</button>
                    {
                        submitError 
                            && <Portal 
                                    type={'error'}
                                    msg={'Неверный логин или пароль'}
                                    callback={onPortalClose}
                                    time={3000}
                                    closeBtn={true}
                                />
                    }
                </form>
            ) }
        />
    );
}

const LoginWrapper = ({loginError, setLoginError, ...props}) => {

    const onSubmit = ({login, password}) => {
        props.login(login, password);
    };

    const onPortalClose = () => {
        props.setError(false);
    }

    return (
        <div className={s.main}>
            <FormLogin onSubmit={onSubmit} submitError={loginError} onPortalClose={onPortalClose} />
            <NavLink to={'/registration'} className={s.regLink}>Регистрация</NavLink>
        </div>
    );

}

const mstp = state => ({
    loginError: getLoginError(state),
});

export default compose(
    connect(mstp, { login, setError }),
    withRedirToMain,
)(LoginWrapper);