import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './aside.module.css';

import IMG_LOGO from './../../assets/img/logo.png';

import AccountInfoAsideContainer from './AccountInfoAside/AccountInfoAsideContainer';
import RollUpButtonContainer from './RollUpButton/RollUpButtonContainer';
import NavigationMainContainer from './NavigationMain/NavigationMainContainer';

const Aside = ({ isAuth, rollUpStatus }) => {
    return (
        <aside className={`${s.aside} ${rollUpStatus ? '' : s.close}`}>
            <RollUpButtonContainer />
            <NavLink to={isAuth ? '/' : '/login'}>
                <img src={IMG_LOGO} className={s.logo} alt="Логотип"/>
            </NavLink>
            { isAuth && <AccountInfoAsideContainer /> }
            { isAuth && <NavigationMainContainer /> }
        </aside>
    );
}

export default Aside;