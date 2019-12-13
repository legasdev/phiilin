import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PageGroup from './PageGroup';

import { getListUsers } from '../../redux/selectors/users-selectors';
import { getInfoGroup } from '../../redux/selectors/groups-selectors';
import { setListUsers, clearListUsers } from './../../redux/users-reducer';
import { setListGroups, clearInfoGroup } from './../../redux/groups-reducer';

const PageGroupContainer = (
    { listUsers, infoGroup, 
        setListUsers, clearListUsers, 
        setListGroups, clearInfoGroup, 
        match }) => {

    const [groupId] = useState(match.params.groupId);

    useEffect(() => {
        setListGroups(groupId)
        setListUsers(groupId);

        return () => {
            clearInfoGroup();
            clearListUsers();
        }
    }, 
    [
        setListUsers, 
        setListGroups, 
        groupId, 
        clearInfoGroup,
        clearListUsers
    ]);

    return infoGroup && <PageGroup groupInfo={infoGroup} users={listUsers} />;
};

const mstp = state => ({
    listUsers: getListUsers(state),
    infoGroup: getInfoGroup(state),
});

const ComposePageGroupContainer = compose(
    connect(
        mstp, 
        { 
            setListUsers, 
            setListGroups, 
            clearInfoGroup,
            clearListUsers,
        }),
    withRouter
)(PageGroupContainer)

export default ComposePageGroupContainer;