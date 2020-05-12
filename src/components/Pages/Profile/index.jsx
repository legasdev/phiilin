import React, { useEffect } from "react";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";

import s from './Profile.module.less';

const Profile = props => {

    const RedirectToLogin = useRedirectToLogin();

    useEffect(() => {
        document.title = 'Профиль | SLR Project';
    });

    return (
        RedirectToLogin ||
        <div className={s.main}>
            Профиль
        </div>
    );
};

export default Profile;