import React, {useEffect} from "react";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";

import s from "./Users.module.less";
import UserGroup from "./UserGroup";

const UsersPage = props => {

    const
        RedirectToLogin = useRedirectToLogin();

    useEffect(() => {
        document.title = 'Учащиеся | SLR Project';
    });

    return (
        RedirectToLogin ||
        <section className={s.main}>
            <h2>Учащиеся</h2>
            <div className={s.cardWrapper}>
                <UserGroup
                    name={'11234'}
                />
                <UserGroup
                    name={'43232'}
                />
            </div>
        </section>
    );
};

export default UsersPage;