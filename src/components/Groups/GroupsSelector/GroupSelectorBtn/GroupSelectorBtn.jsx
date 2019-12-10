import React from 'react';

import s from './../GroupSelector.module.css';

const GroupSelectorBtn = ({active, setCourse, num, children}) => (
    <button className={`${s.btn} ${active ? s.active: ''}`} onClick={() => setCourse(num)}>{children}</button>
);
    
export default GroupSelectorBtn;