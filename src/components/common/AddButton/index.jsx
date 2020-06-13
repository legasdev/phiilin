import React, {useCallback} from "react";

import s from './AddButton.module.less';

const AddButton = ({ title, onHandleClick }) => {

    const
        onClick = useCallback((event) => {
            onHandleClick(event);
        }, [onHandleClick]);

    return (
        <button className={s.main} onClick={onClick}>
            <p className={s.text}>{title}</p>
            <img src={'imgs/icons/GroupNewIcon.svg'}
            alt={title}/>
        </button>
    );
};

export default AddButton;