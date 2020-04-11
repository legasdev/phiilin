import React from "react";

import s from './Button.module.less';

const Button = ({ type, onClick, children }) => {

    return (
        <button
            className={s.main}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;