import React from 'react';

import s from './Avatar.module.css';

const Avatar = props => {
    return (
        <div className={`${s.avatar} ${props.min ? s.avatarMin : ''}`}>
            <img src={props.img ? props.img : "/imgs/avatar_default.png"} alt="" className={s.avatarImg} />
        </div>
    );
};

export default Avatar;