import React from 'react';

import s from './Profile.module.css';

import Avatar from '../common/Avatar/Avatar';

const Profile = ({ userInfo, logout }) => (
    <main className={s.main}>
        <Avatar />
        <div className={s.name}>
            {`${userInfo && userInfo.name}`}
        </div>
        <div className={s.position}>
            {userInfo && userInfo.position}
        </div>
        <div className={s.info}>
            {
                userInfo && userInfo.desk.map(item => (
                    <p className={s.infoItem} key={item.name}>
                        <span>{item.name}</span>{`: ${item.value}`}
                    </p>
                ))
            }
        </div>
        <button className={s.button} onClick={logout}>Выйти</button>
    </main>
);

export default Profile;