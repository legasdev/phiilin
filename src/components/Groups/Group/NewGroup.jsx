import React from 'react';

import s from './Group.module.css';

const NewGroup = ({ onOpenNewGroup }) => (
    <button className={`${s.group} ${s.groupNew}`} onClick={onOpenNewGroup}>
        <p className={s.textNew}>Добавить новую группу</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
            <g id="GroupNewIcon" transform="translate(-362 -272)">
                <g id="Ellipse_16" 
                    data-name="Ellipse 16" 
                    transform="translate(362 272)" 
                    fill="none" stroke="#c5c5c5" 
                    strokeWidth="2" 
                    className={s.groupNewIcon}
                >
                    <circle cx="28" cy="28" r="28" stroke="none"/>
                    <circle cx="28" cy="28" r="27" fill="none"/>
                </g>
                <line id="Line_4" 
                    data-name="Line 4" 
                    x2="28" 
                    transform="translate(376.5 300.5)" 
                    fill="none" stroke="#c5c5c5" 
                    strokeLinecap="round" 
                    strokeWidth="2" 
                    className={s.groupNewIcon}
                />
                <line id="Line_5" 
                    data-name="Line 5" 
                    x2="28" 
                    transform="translate(390.5 286.5) rotate(90)" 
                    fill="none" 
                    stroke="#c5c5c5" 
                    strokeLinecap="round" 
                    strokeWidth="2" 
                    className={s.groupNewIcon}
                />
            </g>
        </svg>
    </button>
);

export default NewGroup;