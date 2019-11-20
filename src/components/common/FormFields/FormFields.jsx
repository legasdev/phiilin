import React from 'react';

import s from './FormFields.module.css';

export const FieldComponent = Component => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <>
            <label htmlFor={props.placeholder} className={s.label}>{props.placeholder}</label>
            <Component id={props.placeholder} className={s.input} { ...input } { ...props } />
            {hasError && <span>Oh no</span>}
        </>
    );
}