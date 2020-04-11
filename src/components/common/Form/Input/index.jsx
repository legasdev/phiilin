import React from "react";

import s from "./Input.module.less";

const Input = ({ label, ...props }) => {

    const id = Math.floor(Math.random() * new Date());

    return (
        <div className={s.main}>
            {
                label &&
                    <label
                        htmlFor={`${props.name}_${id}`}
                        className={s.label}
                    >
                        {label}
                    </label>
            }
            <input
                className={`${s.input} ${label ? s.input__margin_top : ''}`}
                id={`${props.name}_${id}`}
               {...props}
            />
        </div>
    )
};

export default Input;