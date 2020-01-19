import React from 'react';

import s from './Groups.module.css';

import CardNew from '../common/CardNew/CardNew';
import Card from '../common/Card/Card';

const Groups = ({ listGroups, onOpenNewGroup }) => (
    <div className={s.main}>
        <CardNew onOpen={onOpenNewGroup} text={'Добавить новую группу'} />
        {listGroups && listGroups.length
            ? listGroups.map( item => 
                <Card 
                    key={item.id} 
                    name={item.name}
                    desk={item.desk}
                    link={`/groups/${item.id}`}
                    btnName={'Подробнее'}
                /> )
            : <p>Группы не найдены.</p>
        }
    </div>
);

export default Groups;