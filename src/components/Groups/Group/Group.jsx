import React from 'react';

import s from './Group.module.css';

const Group = ({name, users}) => {
    return (
        <div className={s.group}>
            <div className={s.info}>
                <p className={s.nameGroup}>{`Группа ${name}`}</p>
                <p className={s.usersGroup}>{`Пользователей: ${users}`}</p>
            </div>
            <div className={s.btn}>
                Подробнее
            </div>
        </div>
    );
};

export default Group;