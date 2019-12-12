import React from 'react';

import s from './NewGroupForm.module.css';

import Portal from '../../common/Portal/Portal';

import { Form, Field } from 'react-final-form';
import { renderInput } from './../../common/FormFields/FormFields';
import { composeValidators } from './../../../utils/form-helper';
import { maxSymbols, requiredField } from '../../../utils/validators/validators';

const
    vMaxSymbols = maxSymbols(20),
    vRequired = requiredField('Вы не заполнили это поле');

const FormGroup = ({ onSubmit, submitError, onPortalClose, onClose}) => (
    <Form 
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.title}>
                    <h2 className={s.loginTitle}>Добавить новую группу</h2>
                    <div className={s.closeBtn} onClick={onClose}><i></i><i></i></div>
                </div>
                <Field 
                    name={"num"}
                    component={renderInput}
                    type={"text"}
                    labeltext={'Введите номер группы'}
                    placeholder={'Например, 1234'}
                    validate={composeValidators(vRequired, vMaxSymbols)}
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
            </form>
        )}
    />
);

const NewGroupForm = ({ onSubmit, onClose }) => 
    <FormGroup onSubmit={onSubmit} onClose={onClose} />;

export default NewGroupForm;