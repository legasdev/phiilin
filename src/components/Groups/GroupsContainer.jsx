import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Groups from './Groups';

import { setListGroups } from '../../redux/groups-reducer';
import { getListGroups } from '../../redux/selectors/groups-selectors';

const GroupsContainer = ({ setListGroups, ...props}) => {

    useEffect(() => {
        setListGroups();
    }, [setListGroups]);

    return (
        <Groups { ...props } />
    );
};

const mstp = state => ({
    listGroups: getListGroups(state),
});

export default connect(mstp, { setListGroups })(GroupsContainer);