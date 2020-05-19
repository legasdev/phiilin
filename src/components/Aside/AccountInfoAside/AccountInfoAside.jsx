import React from 'react';
import {useSelector} from "react-redux";
import {positionsUsers} from "../../../utils/maps";

import s from './AccountInfoAside.module.less';

import Avatar from '@src/components/common/Avatar/Avatar';

const AccountInfoAside = props => {

    const userName = useSelector(state => state.auth.name);
    const userLastName = useSelector(state => state.auth.lastName);
    const userPosition = useSelector(state => state.auth.position);

    return (
        <div className={s.info}>
            <Avatar min={true} />
            <p className={s.username}>
                {`${userName} ${userLastName}`}
            </p>
            <div className={s.horizonLine} />
            <p>
                {positionsUsers.get(userPosition)}
            </p>
        </div>
    );
};

export default AccountInfoAside;