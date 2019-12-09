import React from 'react';

import s from './Groups.module.css';

import Group from './Group/Group';

const Groups = ({ listGroups }) => {

    return (
        <div className={s.main}>
            {listGroups &&
                listGroups.map( item => <Group key={item.id} { ...item } />)
            }
        </div>
    );
};

export default Groups;