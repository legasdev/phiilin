import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './navigationMain.module.less';

const NavigationMain = ({rollUpStatus}) => {
    return (
        <nav className={s.nav}>
            <NavLink 
                exact to={'/'} 
                className={`${s.link} ${rollUpStatus ? '' : s.close}`} 
                activeClassName={s.active}>
                    <span>Профиль</span>
            </NavLink>
            <NavLink 
                to={'/groups'} 
                className={`${s.link} ${rollUpStatus ? '' : s.close}`} 
                activeClassName={s.active}>
                    <span>Группы</span>
            </NavLink>
            <NavLink 
                to={'/users'} 
                className={`${s.link} ${rollUpStatus ? '' : s.close}`} 
                activeClassName={s.active}>
                <span>Пользователи</span>
            </NavLink>
        </nav>
    )
}

export default NavigationMain;