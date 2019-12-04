import React from 'react';

import s from './Profile.module.css';

const Profile = props => {
    return (
        <main className={s.main}>
            <div className={s.avatar}>
                <img src="/imgs/avatar_default.png" alt="" className={s.avatarImg} />
            </div>
            <div className={s.name}>
                {`${props.name} ${props.lastName}`}
            </div>
            <div className={s.position}>
                {props.position}
            </div>
            <button className={s.button} onClick={props.logout}>Выйти</button>
        </main>
    );
}

export default Profile;