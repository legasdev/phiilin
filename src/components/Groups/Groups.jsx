import React from 'react';

import s from './Groups.module.css';

import Group from './Group/Group';
import CardNew from '../common/CardNew/CardNew';

const Groups = ({ listGroups, onOpenNewGroup }) => {

    return (
        <div className={s.main}>
            <CardNew onOpen={onOpenNewGroup} text={'Добавить новую группу'} />
            {listGroups &&
                listGroups.map( item => <Group key={item.id} { ...item } />)
            }
        </div>
    );
};

export default Groups;