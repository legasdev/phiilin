import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import s from './Portal.module.css';

const Portal = ({time, callback, type, msg, closeBtn}) => {
    const [showClass, setShowClass] = useState('');
    const [root] = useState(document.createElement('div'));
    const [isActive, setIsActive] = useState(true);
    const [portalOpen, setPortalOpen] = useState(false);

    useEffect(() => {
        document.querySelector('#portals').appendChild(root);
        setPortalOpen(true);

        return () => {
            document.querySelector('#portals').removeChild(root);
        };
    }, [root]);

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