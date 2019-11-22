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

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

const
    vMaxSymbols = maxSymbols(20),
    vRequired = requiredField('Вы не заполнили это поле');

const FormLogin = props => {
    return (
        <Form
            onSubmit={props.onSubmit}
            validate={values => {
                console.log(values);
            }}
            render={ ({ handleSubmit, submitError, form }) => (
                <form className={s.loginForm} onSubmit={handleSubmit}>
                    <Field
                        name={"login"}
                        component={renderInput}
                        type={"text"}
                        labeltext={'Логин'}
                        validate={composeValidators(vRequired)}
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
                        submitError &&
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
            <FormLogin onSubmit={onSubmit} />
            <NavLink to={'/registration'} className={s.regLink}>Регистрация</NavLink>
        </div>
    );

}

export default compose(
    connect(null, { login }),
    withRedirToMain,
)(LoginWrapper);