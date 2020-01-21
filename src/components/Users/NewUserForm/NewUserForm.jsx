import React from 'react';

import s from './../../Groups/NewGroupForm/NewGroupForm.module.css';

import Portal from '../../common/Portal/Portal';

import { Form, Field } from 'react-final-form';
import { renderInput, renderSelect } from './../../common/FormFields/FormFields';
import { composeValidators } from './../../../utils/form-helper';
import { requiredField } from '../../../utils/validators/validators';

const
    vRequired = requiredField('Вы не заполнили это поле'),
    reqSelect = requiredField('Выберите номер группы');

const NewUserForm = ({ onSubmit, submitError, onPortalClose, onClose }) => (
    <Form 
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
            <form
                className={s.form}
                onSubmit={e => {
                    const promise = handleSubmit(e);
                    promise && promise.then(() => {form.reset();})
                }}
            >
                <div className={s.title}>
                    <h2 className={s.loginTitle}>Добавить нового пользователя</h2>
                    <div className={s.closeBtn} onClick={onClose}><i></i><i></i></div>
                </div>
                <div className={s.scroll}>
                    <div className={s.scrollInner}>
                        <Field 
                            name={"login"}
                            component={renderInput}
                            type={"text"}
                            labeltext={'Введите логин пользователя'}
                            placeholder={'Например, user01'}
                            validate={composeValidators(vRequired)}
                        />
                        <Field 
                            name={"name"}
                            component={renderInput}
                            type={"text"}
                            labeltext={'Введите ФИО пользователя'}
                            placeholder={'Например, Иванов Иван Иванович'}
                            validate={composeValidators(vRequired)}
                        />
                        <Field 
                            name={"password"}
                            component={renderInput}
                            type={"password"}
                            labeltext={'Введите пароль для пользователя'}
                            placeholder={'Например, <Рандомная генерация цифр и букв>'}
                            validate={composeValidators(vRequired)}
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
                        <button className={s.btn} type={'submit'}>Добавить</button>
                    </div>
                </div>
                {
                    submitError 
                        && <Portal
                                type={'error'}
                                msg={'Что-то пошло не так'}
                                callback={onPortalClose}
                                time={3000}
                                closeBtn={true}
                            />
                }
                {
                    Object.is(submitError, false)
                        && <Portal
                                type={'msg'}
                                msg={'Пользователь добавлен.'}
                                callback={onPortalClose}
                                time={3000}
                                closeBtn={true}
                            />
                }  
            </form>
        )}
    />
);

export default NewUserForm;