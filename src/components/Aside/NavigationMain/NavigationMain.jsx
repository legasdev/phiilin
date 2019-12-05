import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './navigationMain.module.css';

const NavigationMain = props => {
    return (
        <nav className={s.nav}>
            <NavLink to={'/'} className={s.link} activeClassName={s.active}>Профиль</NavLink>
            <NavLink to={'/groups'} className={s.link} activeClassName={s.active}>Группы</NavLink>
        </nav>
    )
}

export default NavigationMain;