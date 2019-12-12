import React from 'react';
import ReactDOM from 'react-dom';

import s from './Popup.module.css';

import { useCreatePoral } from '../../../utils/effects';

const Popup = ({ onClose, children }) => {

    const root = useCreatePoral();
    
    return (
        ReactDOM.createPortal(
            <div className={s.wrapper}>
                <div className={s.wrapperClick} onClick={onClose}></div>
                {children}
            </div>,
            root
        )
    )
};

export default Popup;