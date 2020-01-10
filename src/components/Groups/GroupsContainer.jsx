import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Groups from './Groups';

import { 
    setListGroups, 
    addNewGroup,
    setErrorAddNew
} from '../../redux/groups-reducer';
import { 
    getListGroups, 
    getIsErrorAddNew
} from '../../redux/selectors/groups-selectors';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import GroupSelector from './GroupsSelector/GroupSelector';
import Popup from '../common/Popup/Popup';
import NewGroupForm from './NewGroupForm/NewGroupForm';

const GroupsContainer = ({ setListGroups, listGroups, addNewGroup, isErrorAddNew, setErrorAddNew }) => {

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
                : listGroups 
                    && listGroups.filter(item => item.desk.reduce((res, e) => 
                            res = e.name === 'Курс' && e.value === courseFilter, false)
                    );

        setListGroupsByCourse(list);

    }, [setListGroupsByCourse, listGroups, courseFilter]);

    const setCourse = num => setCourseFilter(num);

    const onOpenNewGroup = () => setIsNewGroupOpen(true);

    const onCloseNewGroup = () => {
        setIsNewGroupOpen(false);
        setErrorAddNew(null);
    };

    const onNewGroupSubmit = data => addNewGroup(data);

    const onPortalClose = () => setErrorAddNew(null);

    return (
        <>
            <GroupSelector course={courseFilter} setCourse={setCourse} />
            <Groups listGroups={listGroupsByCourse} onOpenNewGroup={onOpenNewGroup} />
            {
                isNewGroupOpen && 
                    <Popup onClose={onCloseNewGroup}>
                        <NewGroupForm 
                            onClose={onCloseNewGroup} 
                            submitError={isErrorAddNew} 
                            onSubmit={onNewGroupSubmit}
                            onPortalClose={onPortalClose}
                        />
                    </Popup>
            }
        </>
    );
};

const mstp = state => ({
    listGroups: getListGroups(state),
    isErrorAddNew: getIsErrorAddNew(state),
});

const GroupsContainerCompose = compose(
    connect(mstp, { setListGroups, addNewGroup, setErrorAddNew }),
    withAuthRedirect
)(GroupsContainer)

export default GroupsContainerCompose;