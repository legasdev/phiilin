import React from 'react';

import s from './Profile.module.css';

import Avatar from '../common/Avatar/Avatar';

const Profile = props => {
    return (
        <main className={s.main}>
            <Avatar />
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