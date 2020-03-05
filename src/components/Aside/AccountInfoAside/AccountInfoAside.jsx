import React from 'react';
import {useSelector} from "react-redux";

import s from './accountInfoAside.module.less';

import Avatar from '@src/components/common/Avatar/Avatar';

const AccountInfoAside = props => {

    const userName = useSelector(state => state.auth.name);
    const userLastName = useSelector(state => state.auth.lastName);
    const userPosition = useSelector(state => state.auth.position);

    return (
        <div className={s.info}>
            <div>
                <div>
                    {`${userName} ${userLastName}`}
                </div>
                <div>
                    {userPosition}
                </div>
            </div>
            <Avatar min={true} />
        </div>
    );
};

export default AccountInfoAside;