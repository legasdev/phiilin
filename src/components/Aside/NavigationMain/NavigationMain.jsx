import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './navigationMain.module.less';

const NavigationMain = (props) => {
    return (
        <nav className={s.nav}>
            <NavLink 
                exact to={'/'} 
                className={`${s.link}`}
                activeClassName={s.active}>
                    <span>Профиль</span>
            </NavLink>
            <NavLink 
                to={'/groups'} 
                className={`${s.link}`}
                activeClassName={s.active}>
                    <span>Группы</span>
            </NavLink>
            <NavLink 
                to={'/users'} 
                className={`${s.link}`}
                activeClassName={s.active}>
                <span>Учащиеся</span>
            </NavLink>
            <NavLink
                to={'/tasks'}
                className={`${s.link}`}
                activeClassName={s.active}>
                <span>Задания</span>
            </NavLink>
            <NavLink
                to={'/works'}
                className={`${s.link}`}
                activeClassName={s.active}>
                <span>Работы</span>
            </NavLink>
        </nav>
    )
}

export default NavigationMain;