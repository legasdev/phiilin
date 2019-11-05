import React from 'react';

import s from './accountInfoAside.module.css';

import IMG_AVATAR from './../../../../assets/img/avatar_default.png';

const AccountInfoAside = props => {
    return (
        <div className={s.info}>
            <div className={s.info__name}>
                <div>
                    {`${props.userName} ${props.userLastName}`} 
                </div>
                <div>
                    {props.userPosition}
                </div>
            </div>
            <img src={IMG_AVATAR} className={s.avatar} alt="Ава"/>
        </div>
    );
}

export default AccountInfoAside;