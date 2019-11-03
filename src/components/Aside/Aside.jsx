import React from 'react';

import s from './aside.module.css';

import IMG_LOGO from './../../assets/img/logo.png';

import AccountInfoAside from './AccountInfoAside/AccountInfoAside';
import NavigationMain from './NavigationMain/NavigationMain';

const Aside = props => {
    return (
        <aside className={s.aside}>
            <img src={IMG_LOGO} className={s.logo} alt="Логотип"/>
            <AccountInfoAside />
            <NavigationMain />
        </aside>
    )
}

export default Aside;