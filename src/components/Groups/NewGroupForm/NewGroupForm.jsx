import React from 'react';

import s from './NewGroupForm.module.css';

import Portal from '../../common/Portal/Portal';

import { Form, Field } from 'react-final-form';
import { renderInput } from './../../common/FormFields/FormFields';
import { composeValidators } from './../../../utils/form-helper';
import { maxSymbols, requiredField } from '../../../utils/validators/validators';

const
    vMaxSymbols = maxSymbols(20),
    courseMaxSymbols = maxSymbols(1),
    vRequired = requiredField('Вы не заполнили это поле');

const NewGroupForm = ({ onSubmit, submitError, onPortalClose, onClose}) => (
    <Form 
        onSubmit={onSubmit}
        render={({handleSubmit, form}) => (
            <form 
                className={s.form} 
                onSubmit={e => {
                    const promise = handleSubmit(e);
                    promise && promise.then(() => {form.reset();})
                }}
            >
                <div className={s.title}>
                    <h2 className={s.loginTitle}>Добавить новую группу</h2>
                    <div className={s.closeBtn} onClick={onClose}><i></i><i></i></div>
                </div>
                <Field 
                    name={"name"}
                    component={renderInput}
                    type={"text"}
                    labeltext={'Введите номер группы'}
                    placeholder={'Например, 1234'}
                    validate={composeValidators(vRequired, vMaxSymbols)}
                />
                <Field 
                    name={"course"}
                    component={renderInput}
                    type={"text"}
                    labeltext={'Введите курс группы'}
                    placeholder={'Например, 4'}
                    validate={composeValidators(vRequired, courseMaxSymbols)}
                />
                <button className={s.btn} type={'submit'}>Добавить</button>
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
                                msg={'Группа успешно добавлена!'}
                                callback={onPortalClose}
                                time={3000}
                                closeBtn={true}
                            />
                }  
            </form>
        )}
    />
);

export default NewGroupForm;