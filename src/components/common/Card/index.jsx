import React from "react";

import s from './Card.module.less';
import {NavLink} from "react-router-dom";

const Card = ({ title='Нет заголовка', info=[] }) => {

    return (
        <div
            className={s.main}
        >
            <div className={s.info}>
                <h4 className={s.title}>{title}</h4>
                {
                    info.map(infoObject => (
                        <p
                            key={infoObject.title}
                            className={s.text}
                        >
                            {infoObject.title}: {infoObject.value}
                        </p>
                    ))
                }
            </div>
            <NavLink
                to={'/'}
                className={s.button}
            >
                Подробнее
            </NavLink>
        </div>
    );
};

export default Card;