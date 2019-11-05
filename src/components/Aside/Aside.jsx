import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './aside.module.css';

import IMG_LOGO from './../../assets/img/logo.png';

import AccountInfoAsideContainer from './AccountInfoAside/AccountInfoAsideContainer';
import NavigationMain from './NavigationMain/NavigationMain';

const Aside = props => {
    return (
        <aside className={s.aside}>
            <NavLink to={'/'}>
                <img src={IMG_LOGO} className={s.logo} alt="Логотип"/>
            </NavLink>
            {
                props.isAuth
                 ? <AccountInfoAsideContainer />
                 : <></>
            }
            <NavigationMain />
        </aside>
    );
}

export default Aside;