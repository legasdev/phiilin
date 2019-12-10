import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Groups from './Groups';

import { setListGroups } from '../../redux/groups-reducer';
import { getListGroups } from '../../redux/selectors/groups-selectors';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import GroupSelector from './GroupsSelector/GroupSelector';

const GroupsContainer = ({ setListGroups, listGroups}) => {

    const [courseFilter, setCourseFilter] = useState(0);
    const [listGroupsByCourse, setListGroupsByCourse] = useState(listGroups);

    useEffect(() => {
        setListGroups();
    }, [setListGroups]);

    useEffect(() => {

        const list = 
            courseFilter === 0
                ? listGroups
                : listGroups && listGroups.filter(item => item.course === courseFilter);
            
        setListGroupsByCourse(list);

    }, [setListGroupsByCourse, listGroups, courseFilter]);

    const setCourse = num => setCourseFilter(num);

    return (
        <>
            <GroupSelector course={courseFilter} setCourse={setCourse} />
            <Groups listGroups={listGroupsByCourse} />
        </>
    );
};

const mstp = state => ({
    listGroups: getListGroups(state),
});

const GroupsContainerCompose = compose(
    connect(mstp, { setListGroups }),
    withAuthRedirect
)(GroupsContainer)

export default GroupsContainerCompose;