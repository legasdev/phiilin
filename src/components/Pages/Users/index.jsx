import React, {useEffect, useState, useCallback} from "react";
import {connect, useSelector} from "react-redux";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";

import s from "./Users.module.less";
import UserGroup from "./UserGroup";
import {getListUsers} from "../../../redux/users-reducer";

const UsersPage = ({getListUsers}) => {

    const
        RedirectToLogin = useRedirectToLogin();

    const
        [numberGroup, setNumberGroup] = useState('');

    const
        users = useSelector(state => state.users.listUsers);

    const
        onChangeNumberGroup = useCallback((event) => {
            setNumberGroup(event.target.value);
        }, []);

    useEffect(() => {
        document.title = 'Учащиеся | SLR Project';
    });

    useEffect(() => {
        if (!users) {
            getListUsers();
        }
    }, [users, getListUsers]);

    return (
        RedirectToLogin ||
        <section className={s.main}>
            <h2>Учащиеся</h2>
            <select
                value={numberGroup}
                onChange={onChangeNumberGroup}
            >
                <option value="">===[ Выберите номер группы ]===</option>
                <option value="1234">1234</option>
                <option value="4324ИИ">4324ИИ</option>
            </select>
            <div className={s.cardWrapper}>
                <UserGroup
                    name={'11234'}
                />
                <UserGroup
                    name={'43232'}
                />
            </div>
        </section>
    );
};

export default connect(null, {getListUsers})(UsersPage);