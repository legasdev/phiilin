import React, { useCallback } from "react";
import {connect, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";

import s from './Aside.module.less';

import AccountInfoAside from "./AccountInfoAside/AccountInfoAside";
import NavigationMain from "./NavigationMain/NavigationMain";

const Aside = ({ logout }) => {

    const
        isAuth = useSelector(state => state.auth.isAuth);

    const
        onClickLogout = useCallback(() => {
            logout();
        }, [logout]);

    return (
        isAuth &&
        <div className={s.main}>
            <div>
                <p className={s.logo}>SLR Project</p>
                <AccountInfoAside />
                <NavigationMain />
            </div>
            <div className={s.bottom}>
                <a href={'https://unn.ru'} target={'_blank'}>
                    <img src={'/imgs/logo-unn.png'} alt={'Университет Лобачевского'} />
                </a>
                <button
                    className={s.logout}
                    onClick={onClickLogout}
                >Выйти</button>
            </div>
        </div>
    );
};

export default connect(null, {logout})(Aside);