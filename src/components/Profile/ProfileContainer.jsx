import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { logout } from './../../redux/auth-reducer';
import { getInfo } from './../../redux/profile-reducer';

import { getAuthId, getProfileInfo } from './../../redux/selectors/profile-selectors';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import Profile from './Profile';

const ProfileContainer = ({auth, getInfo, userInfo, logout}) => {

    console.log(userInfo);

    useEffect(() => {
        getInfo(1);
    }, [getInfo]);

    return (
        <div>
            <Profile 
                userInfo={userInfo} 
                logout={logout}
            />
        </div>
    );
};

const mstp = state => ({
    userInfo: getProfileInfo(state),
    authId: getAuthId(state),
});

export default compose(
    connect(mstp, { logout, getInfo }),
    withAuthRedirect
)(ProfileContainer);