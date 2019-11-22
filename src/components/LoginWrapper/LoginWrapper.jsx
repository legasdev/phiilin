import React from 'react';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { login } from '../../redux/auth-reducer';

import s from './loginWrapper.module.css';

import withRedirToMain from '../../hoc/withRedirToMain';

import { Form, Field } from 'react-final-form';
import { renderInput } from '../common/FormFields/FormFields';
import { maxSymbols, requiredField } from '../../utils/validators/validators';
import { getLoginError } from '../../redux/selectors/form-selectors';

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

const
    vMaxSymbols = maxSymbols(20),
    vRequired = requiredField('Вы не заполнили это поле');

const FormLogin = props => {

    console.warn('RENDER');

    return (
        <Form
            onSubmit={props.onSubmit}
            render={ ({ handleSubmit, submitError, form }) => (
                <form className={s.loginForm} onSubmit={handleSubmit}>
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
                        props.submitError &&
                            <div className={s.errorMsg}>Неверный логин или пароль</div>
                    }
                </form>
            ) }
        />
    );
}

const LoginWrapper = props => {

    const onSubmit = ({login, password}) => {
        props.login(login, password);
    };

    return (
        <div className={s.main}>
            <FormLogin onSubmit={onSubmit} submitError={props.loginError} />
            <NavLink to={'/registration'} className={s.regLink}>Регистрация</NavLink>
        </div>
    );

}

const mstp = state => ({
    loginError: getLoginError(state),
});

export default compose(
    connect(mstp, { login }),
    withRedirToMain,
)(LoginWrapper);