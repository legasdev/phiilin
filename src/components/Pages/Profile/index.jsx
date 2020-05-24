import React, { useEffect } from "react";
import {useSelector} from "react-redux";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";

import s from './Profile.module.less';

const Profile = props => {

    const RedirectToLogin = useRedirectToLogin();

    const
        name = useSelector(state => state.auth.name),
        login = useSelector(state => state.auth.login),
        email = useSelector(state => state.auth.email),
        phone = useSelector(state => state.auth.phone),
        position = useSelector(state => state.auth.position);


    useEffect(() => {
        document.title = 'Профиль | SLR Project';
    });

    return (
        RedirectToLogin ||
        <section className={s.main}>
            <h2>Профиль</h2>
            <div className={s.wrapper}>
                <p><b>ФИО</b>: {name || ''}</p>
                <p><b>Логин</b>: {login || ''}</p>
                <p><b>Email</b>: {email || ''}</p>
                <p><b>Телефон</b>: {phone || ''}</p>
                <p><b>Тип аккаунта</b>: {position || ''}</p>
            </div>
        </section>
    );
};

export default Profile;