import React from "react";

import s from './Aside.module.less';
import AccountInfoAside from "./AccountInfoAside/AccountInfoAside";

const Aside = props => {

    return (
        <div className={s.main}>
            <AccountInfoAside />
        </div>
    );
};

export default Aside;