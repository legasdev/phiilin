import React from 'react';

import s from './Avatar.module.css';

const Avatar = ({ img, min }) => {
    return (
        <div className={`${s.avatar} ${min ? s.avatarMin : ''}`}>
            <img src={img ? img : "/imgs/avatar_default.png"} alt="" className={s.avatarImg} />
        </div>
    );
};

export default Avatar;