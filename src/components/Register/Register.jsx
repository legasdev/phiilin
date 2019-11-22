import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import s from './Register.module.css';

import { Form, Field } from 'react-final-form';
import { renderInput, renderSelect } from '../common/FormFields/FormFields';
import { requiredField, compareValue } from '../../utils/validators/validators';
const composeValidators = (...validators) => value => 
    validators.reduce((error, validator) => error || validator(value), undefined);

const
    reqInput = requiredField('Заполните поле'),
    reqSelect = requiredField('Выберите номер группы');


const FormRegister = props => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={ ({ handleSubmit, form, submitting, pristine, values }) => (
                <form className={`${s.loginForm} ${s.registerForm}`} onSubmit={handleSubmit}>
                    <h2 className={s.loginTitle}>Регистрация</h2>
                    <div className={s.fieldsWrapper}>
                        <Field
                            name={"login"}
                            component={renderInput}
                            type={"text"}
                            className={s.field}
                            labeltext={'Логин'}
                            validate={composeValidators(reqInput)}
                        />
                        <Field 
                            name={'group'}
                            type={'select'}
                            component={renderSelect}
                            className={s.field}
                            labeltext={'Номер группы'}
                            validate={composeValidators(reqSelect)}>
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
                            validate={composeValidators(reqInput)}
                        />
                        <Field 
                            name={'lastName'}
                            component={renderInput}
                            type={'text'}
                            labeltext={'Фамилия'}
                            className={s.field}
                            validate={composeValidators(reqInput)}
                        />
                        <Field 
                            name={'email'}
                            component={renderInput}
                            type={'email'}
                            labeltext={'Email'}
                            className={s.field}
                            validate={composeValidators(reqInput)}
                        />
                        <Field 
                            name={'tel'}
                            component={renderInput}
                            type={'tel'}
                            labeltext={'Телефон'}
                            className={s.field}
                            validate={composeValidators(reqInput)}
                        />
                        <Field 
                            name={'password'}
                            component={renderInput}
                            type={'password'}
                            labeltext={'Пароль'}
                            className={s.field}
                            validate={composeValidators(reqInput)}
                        />
                        <Field 
                            name={'dpassword'}
                            component={renderInput}
                            type={'password'}
                            labeltext={'Повтор пароля'}
                            className={s.field}
                            validate={composeValidators(reqInput, compareValue(values.password))}
                        />
                    </div>
                    <button className={s.btn} type={'submit'}>Войти</button>
                </form>
            ) }
        />
    );
};

const Register = React.memo(props => {

    const onSubmit = (data) => {
        console.log(data);
    }

    // console.log(props);

    return (
        <div className={s.main}>
            <FormRegister onSubmit={onSubmit} />
            <NavLink to={'/login'} className={s.regLink}>Уже есть аккаунт? Войти</NavLink>
        </div>
    );
});

// const mstp = state => ({
//     pass: dPassSelector(state, 'password'),
// });

// export default connect(mstp, null)(Register);
export default Register;