import React from 'react';

import s from './Groups.module.css';

import Group from './Group/Group';
import NewGroup from './Group/NewGroup';

const Groups = ({ listGroups }) => {

    return (
        <div className={s.main}>
            <NewGroup />
            {listGroups &&
                listGroups.map( item => <Group key={item.id} { ...item } />)
            }
        </div>
    );
};

export default Groups;