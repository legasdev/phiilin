import React from "react";

import s from './Aside.module.less';
import AccountInfoAside from "./AccountInfoAside/AccountInfoAside";
import { useSelector } from "react-redux";

const Aside = props => {

    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        isAuth &&
        <div className={s.main}>
            <AccountInfoAside />
        </div>
    );
};

export default Aside;