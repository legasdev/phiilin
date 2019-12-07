import React from 'react';

import s from './accountInfoAside.module.css';

import Avatar from '../../common/Avatar/Avatar';

const AccountInfoAside = props => {
    return (
        <div className={s.info}>
            <div className={`${s.infoName} ${props.rollUpStatus ? s.unhideInfoName : s.hideInfoName}`}>
                <div>
                    {`${props.userName} ${props.userLastName}`} 
                </div>
                <div>
                    {props.userPosition}
                </div>
            </div>
            <Avatar min={true} />
        </div>
    );
}

export default AccountInfoAside;