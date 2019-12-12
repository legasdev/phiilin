/**
 * 
 * Описание полей формы
 * 
 * 
*/

import React from 'react';

import s from './FormFields.module.css';

const createRender = render => ({input, meta: {touched, error}, ...props}) => {

    const 
        hasError = touched && error;

    return (
        <label className={`${s.label} ${props.className && props.className}`}>
            <div className={s.labelText}>{props.labeltext}</div>
            { 
                render(
                    input,
                    props.children, 
                    `${s.input} ${hasError ? s.inputError : ''}`,
                    props)
            }
            {hasError && <span className={s.spanError}>{error}</span>}
        </label>
    );
}

export const renderSelect = createRender((input, children, className, props) => {
    return (
        <select name={props.name} className={className} {...input}>
            {children}
        </select>
    );    
});

export const renderInput = createRender((input, children, className, {placeholder, ...props}) => 
    <input name={props.name} className={className} type={props.type} placeholder={placeholder} {...input} />);