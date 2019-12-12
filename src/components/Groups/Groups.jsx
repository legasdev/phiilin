import React from 'react';

import s from './Groups.module.css';

import Group from './Group/Group';
import NewGroup from './Group/NewGroup';

const Groups = ({ listGroups, onOpenNewGroup }) => {

    return (
        <div className={s.main}>
            <NewGroup onOpenNewGroup={onOpenNewGroup} />
            {listGroups &&
                listGroups.map( item => <Group key={item.id} { ...item } />)
            }
        </div>
    );
};

export default Groups;