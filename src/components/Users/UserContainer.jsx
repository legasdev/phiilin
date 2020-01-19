import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Users from './Users';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import { getListUsers } from '../../redux/selectors/users-selectors';
import { setListUsers } from './../../redux/users-reducer';

const UserContainer = ({ userListRedux, setListUsers }) => {

    const [usersList, setUsersList] = useState(userListRedux);

    useEffect( () => {
        setListUsers();
        setUsersList(userListRedux);
    }, [setListUsers, userListRedux] );

    const onOpenNewUser = () => {
        console.log('Open');
    };

    return (
        <Users usersList={usersList} onOpenNewUser={onOpenNewUser} />
    );

};

const mstp = state => ({
    userListRedux: getListUsers(state),
});

const UserContainerCompose = compose(
    connect(mstp, { setListUsers }),
    withAuthRedirect
)(UserContainer);

export default UserContainerCompose;