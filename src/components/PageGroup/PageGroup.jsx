import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './PageGroup.module.css';

const PageGroup = ({ groupInfo, users }) => (
    <div className={s.main}>
        <h3 className={s.titleName}>Группа {groupInfo.name}</h3>
        <div className={s.info}>
            <p className={s.infoItem}>Номер курса: {groupInfo.course}</p>
            <p className={s.infoItem}>Количество учащихся: {groupInfo.users}</p>
        </div>
        <h4 className={s.titleName}>Список учащихся</h4>
        <div className={s.wrapper}>
            {
                users && users.length
                    ? users.map(item => (
                        <div className="card" key={item.id}>
                            <div className="card__info">
                                <p className="card__name">{item.name}</p>
                                <p>Группа: {item.group}</p>
                                <p>Работ: {item.works}</p>
                                <p>На проверке: {item.check}</p>
                                <p>В доработке: {item.edit}</p>
                                <p>Принято: {item.done}</p>
                            </div>
                            <NavLink to={`/groups/${item.id}`} className="card__btn">
                                Подробнее
                            </NavLink>
                        </div>
                    ))
                    : <p className={s.centerBlock}>У данной группы нет пользователей.</p>
            }
        </div>
    </div>
);

export default PageGroup;