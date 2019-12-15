import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Card.module.css';

const Card = ({ name, desk, link, btnName }) => (
    <div className={s.card}>
        <div className={s.card__info}>
            <p className={s.card__name}>{name}</p>
            {
                desk.map((item, i) => <p key={i}>{item.name}: {item.value}</p>)
            }
        </div>
        <NavLink to={link} className={s.card__btn}>
            {btnName}
        </NavLink>
    </div>
);

export default Card;