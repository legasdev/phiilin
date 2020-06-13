import React from 'react';

import s from './RollUpButton.module.css';

const RollUpButton = ({ onClickSetRollUp, rollUpStatus }) => {
    return (
        <div className={s.button} onClick={() => onClickSetRollUp()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="#2b2b2b" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round" className={`feather ${rollUpStatus ? '' : s.close}`}>
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 8 8 12 12 16"></polyline>
                <line x1="16" y1="12" x2="8" y2="12"></line>
            </svg>
        </div>
    );
};

export default RollUpButton;