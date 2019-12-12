import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import s from './Portal.module.css';

import { useCreatePoral } from '../../../utils/effects';

const Portal = ({time, callback, type, msg, closeBtn}) => {
    const [showClass, setShowClass] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [portalOpen, setPortalOpen] = useState(false);
    const root = useCreatePoral(setPortalOpen);

    useEffect(() => {

        const timer = setInterval(() => close(), time);

        function close() {
            setShowClass('');
            setTimeout(() => {
                setPortalOpen(false);
                callback();
            }, 500); 
        };

        if (isActive) {
            setTimeout(() => setShowClass('active'), 10);
        }
        else
            close();

        return () => {
            clearInterval(timer);
        }

    }, [isActive, callback, time]);

    return portalOpen &&
        ReactDOM.createPortal(
            <div className={`
                ${s.portal} 
                ${s[showClass]} 
                ${closeBtn ? s.spaceBetween : ''} 
                ${s[type]}
            `}>
                <p>{msg}</p>
                {
                    closeBtn && 
                        <div className={s.closeBtn} onClick={() => setIsActive(false)}>
                            <i></i>
                            <i></i>
                        </div>
                }
            </div>,
            root
        );
};

export default Portal;