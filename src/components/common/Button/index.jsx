import React from "react";

import s from './Button.module.less';

const Button = ({ type, mini, onClick, children, light }) => {

    return (
        <button
            className={`${s.main} ${light ? s.light : ''} ${mini ? s.mini : ''}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;