import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import s from './Register.module.css';

import { renderInput, renderSelect } from '../common/FormFields/FormFields';
import { requiredField, compareValue } from '../../utils/validators/validators';

const
    reqInput = requiredField('Заполните поле'),
    reqSelect = requiredField('Выберите номер группы'),
    dPassSelector = formValueSelector('register');


const Form = React.memo(props => {
    const { handleSubmit } = props;
    return (
        <form className={`${s.loginForm} ${s.registerForm}`} onSubmit={ handleSubmit }>
            <h2 className={s.loginTitle}>Регистрация</h2>
            <div className={s.fieldsWrapper}>
                <Field 
                    name={'login'}
                    component={renderInput}
                    type={'text'}
                    labeltext={'Логин'}
                    className={s.field}
                    validate={[reqInput]}
                />
                <Field 
                    name={'group'}
                    type={'select'}
                    component={renderSelect}
                    className={s.field}
                    labeltext={'Номер группы'}
                    validate={[reqSelect]}>
                        <option />
                        <option value="123">123</option>
                        <option value="1234">1234</option>
                        <option value="12345">12345</option>
                </Field>
                <Field 
                    name={'firstName'}
                    component={renderInput}
                    type={'text'}
                    labeltext={'Имя'}
                    className={s.field}
                    validate={[reqInput]}
                />
                <Field 
                    name={'lastName'}
                    component={renderInput}
                    type={'text'}
                    labeltext={'Фамилия'}
                    className={s.field}
                    validate={[reqInput]}
                />
                <Field 
                    name={'email'}
                    component={renderInput}
                    type={'email'}
                    labeltext={'Email'}
                    className={s.field}
                    validate={[reqInput]}
                />
                <Field 
                    name={'tel'}
                    component={renderInput}
                    type={'tel'}
                    labeltext={'Телефон'}
                    className={s.field}
                    validate={[reqInput]}
                />
                <Field 
                    name={'password'}
                    component={renderInput}
                    type={'password'}
                    labeltext={'Пароль'}
                    className={s.field}
                    validate={[reqInput]}
                />
                <Field 
                    name={'dpassword'}
                    component={renderInput}
                    type={'password'}
                    labeltext={'Повтор пароля'}
                    className={s.field}
                    validate={[reqInput, compareValue(props.pass)]}
                />
            </div>
            <button className={s.btn} type={'submit'}>Подать заявку на регистрацию</button>
        </form>
    );
});

const RegisterForm = reduxForm({form: 'register'})(Form);

const Register = React.memo(props => {

    const onSubmit = (data) => {
        console.log(data);
    }

    console.log(props);

    return (
        <div className={s.main}>
            <RegisterForm onSubmit={onSubmit} pass={props.pass} />
            <NavLink to={'/login'} className={s.regLink}>Уже есть аккаунт? Войти</NavLink>
        </div>
    );
});

const mstp = state => ({
    pass: dPassSelector(state, 'password'),
});

export default connect(mstp, null)(Register);