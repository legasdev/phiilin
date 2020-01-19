import React from 'react';

import s from './PageGroup.module.css';
import Card from '../common/Card/Card';

const PageGroup = ({ groupInfo, users }) => (
    <div className={s.main}>
        <h3 className={s.titleName}>Группа {groupInfo.name}</h3>
        <div className={s.info}>
            <p className={s.infoItem}>Номер курса: {groupInfo.desk.course}</p>
            <p className={s.infoItem}>Количество учащихся: {groupInfo.desk.users}</p>
        </div>
        <h4 className={s.titleName}>Список учащихся</h4>
        <div className={s.wrapper}>
            {
                users && users.length
                    ? users.map(item => (
                        <Card 
                            key={item.id}
                            name={item.name}
                            desk={item.desk}
                            link={`/groups/${item.id}`}
                            btnName={'Подробнее'}
                        />
                    ))
                    : <p className={s.centerBlock}>У данной группы нет пользователей.</p>
            }
        </div>
    </div>
);

export default PageGroup;