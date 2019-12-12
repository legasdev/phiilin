import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Groups from './Groups';

import { setListGroups } from '../../redux/groups-reducer';
import { getListGroups } from '../../redux/selectors/groups-selectors';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import GroupSelector from './GroupsSelector/GroupSelector';
import Popup from '../common/Popup/Popup';
import NewGroupForm from './NewGroupForm/NewGroupForm';

const GroupsContainer = ({ setListGroups, listGroups}) => {

    const [courseFilter, setCourseFilter] = useState(0);
    const [isNewGroupOpen, setIsNewGroupOpen] = useState(false);
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

    const onOpenNewGroup = () => {
        setIsNewGroupOpen(true);
    };

    const onCloseNewGroup = () => {
        setIsNewGroupOpen(false);
    };

    const onNewGroupSubmit = ({num}) => {
        alert(`Вы ввели ${num}`);
    };

    return (
        <>
            <GroupSelector course={courseFilter} setCourse={setCourse} />
            <Groups listGroups={listGroupsByCourse} onOpenNewGroup={onOpenNewGroup} />
            {
                isNewGroupOpen && 
                    <Popup onClose={onCloseNewGroup}>
                        <NewGroupForm onClose={onCloseNewGroup} onSubmit={onNewGroupSubmit} />
                    </Popup>
            }
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