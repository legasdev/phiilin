import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './navigationMain.module.less';
import {useSelector} from "react-redux";

const NavigationMain = (props) => {

    const
        position = useSelector(state => state.auth.position);

    return (
        <nav className={s.nav}>
            <NavLink 
                exact to={'/'} 
                className={`${s.link}`}
                activeClassName={s.active}>
                    <span>Профиль</span>
            </NavLink>
            {
                position !== 'student' ?
                    <>
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
                    </> :
                    <>
                        <NavLink
                            exact to={'/tasks'}
                            className={`${s.link}`}
                            activeClassName={s.active}>
                            <span>Мои задания</span>
                        </NavLink>
                        <NavLink
                            to={'/tasks/group'}
                            className={`${s.link}`}
                            activeClassName={s.active}>
                            <span>Задания группы</span>
                        </NavLink>
                    </>
            }
        </nav>
    )
};

export default NavigationMain;