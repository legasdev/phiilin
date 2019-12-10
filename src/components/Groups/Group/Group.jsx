import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Group.module.css';

const Group = ({name, users, course}) => (
    <div className={s.group}>
        <div className={s.info}>
            <p className={s.nameGroup}>{`Группа ${name}`}</p>
            <p>{`Пользователей: ${users}`}</p>
            <p>{`Курс: ${course}`}</p>
        </div>
        <NavLink to={'/groups'} className={s.btn}>
            Подробнее
        </NavLink>
    </div>
);

export default Group;