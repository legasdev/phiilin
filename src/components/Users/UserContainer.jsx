import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Users from './Users';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getListUsers, getIsErrorAddNew } from '../../redux/selectors/users-selectors';
import { setListUsers, setErrorAddNew, addNewUser } from './../../redux/users-reducer';
import Popup from '../common/Popup/Popup';
import NewUserForm from './NewUserForm/NewUserForm';

const UserContainer = ({ 
        userListRedux, isErrorAddNew,
        setListUsers, setErrorAddNew, 
        addNewUser }) => {

    const [usersList, setUsersList] = useState(userListRedux);
    const [isAddNewUserForm, setIsAddNewUserForm] = useState(false);

    useEffect( () => {
        setListUsers();
    }, [setListUsers] );

    useEffect(() => {
        setUsersList(userListRedux);
    }, [userListRedux]);

    const onOpenAddNewUser = () => setIsAddNewUserForm(true);

    const onCloseAddNewUser = () => {
        setIsAddNewUserForm(false);
    };

    const onPortalClose = () => setErrorAddNew(null);

    const onAddNewUser = data => addNewUser(data);

    return (
        <>
            <Users usersList={usersList} onOpenNewUser={onOpenAddNewUser} />
            {
                isAddNewUserForm && 
                    <Popup onClose={onCloseAddNewUser}>
                        <NewUserForm
                            onClose={onCloseAddNewUser}
                            submitError={isErrorAddNew}
                            onSubmit={onAddNewUser}
                            onPortalClose={onPortalClose}
                        />
                    </Popup>
            }
        </>
    );

};

const mstp = state => ({
    userListRedux: getListUsers(state),
    isErrorAddNew: getIsErrorAddNew(state),
});

const UserContainerCompose = compose(
    connect(mstp, { setListUsers, setErrorAddNew, addNewUser }),
    withAuthRedirect
)(UserContainer);

export default UserContainerCompose;