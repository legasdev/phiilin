import React, { useEffect } from "react";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";

import s from './Profile.module.less';
import Card from "../../common/Card";

const Profile = props => {

    const RedirectToLogin = useRedirectToLogin();

    useEffect(() => {
        document.title = 'Профиль | SLR Project';
    });

    return (
        RedirectToLogin ||
        <div className={s.main}>
            <Card
                title={'Группа 6654'}
                info={[
                    {
                        title: 'Учащихся',
                        value: '4'
                    }
                ]}
            />
            <Card
                title={'Иванов Иван Иванович'}
                info={[
                    {
                        title: 'Группа',
                        value: '1234'
                    },
                    {
                        title: 'Работ',
                        value: '11'
                    },
                    {
                        title: 'На проверке',
                        value: '3'
                    },
                    {
                        title: 'В доработке',
                        value: '1'
                    },
                    {
                        title: 'Принято',
                        value: '7'
                    },
                ]}
            />
        </div>
    );
};

export default Profile;