import React from "react";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";

const Profile = props => {

    const RedirectToLogin = useRedirectToLogin();

    return (
        RedirectToLogin ||
        <div>
            Профиль
        </div>
    );
};

export default Profile;