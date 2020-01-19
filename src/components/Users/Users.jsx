import React from 'react';

import s from './../Groups/Groups.module.css';
import CardNew from '../common/CardNew/CardNew';
import Card from '../common/Card/Card';

const Users = ({usersList, onOpenNewUser}) => {
    return (
        <div className={s.main}>
            <CardNew onOpen={onOpenNewUser} text={'Добавить нового пользователя'} />
            {
               usersList && usersList.length
                ? usersList.map( item => 
                    <Card 
                        key={item.id} 
                        name={item.name}
                        desk={item.desk}
                        link={`/profile/${item.id}`}
                        btnName={'Подробнее'}
                    /> )
                : <p>Пользователи не найдены.</p>
            }
        </div>
    );
};

export default Users;