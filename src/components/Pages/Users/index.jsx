import React, {useEffect, useState, useCallback} from "react";
import {connect, useSelector} from "react-redux";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";

import s from "./Users.module.less";
import UserGroup from "./UserGroup";
import {getListUsers} from "../../../redux/users-reducer";
import Select from "../../common/Form/Select";

const UsersPage = ({getListUsers}) => {

    const
        RedirectToLogin = useRedirectToLogin();

    const
        [numberGroup, setNumberGroup] = useState('');

    const
        listGroups = useSelector(state => state.groups.listGroups),
        listUsers = useSelector(state => state.users.listUsers);

    const
        onChangeNumberGroup = useCallback(({value}) => {
            setNumberGroup(value);
        }, []);

    useEffect(() => {
        document.title = 'Учащиеся | SLR Project';
    });

    useEffect(() => {
        getListUsers(numberGroup);
    }, [getListUsers, numberGroup]);

    return (
        RedirectToLogin ||
        <section className={s.main}>
            <h2>Учащиеся</h2>
            <div className={s.filters}>
                <Select
                    isMini
                    values={listGroups && [
                        {name: 'Выберите группу', value: ''},
                        ...listGroups.map(group => ({name: group, value: group}))
                    ]}
                    onChange={onChangeNumberGroup}
                />
            </div>
            {
                listUsers && numberGroup &&
                <div className={s.cardWrapper}>
                    <UserGroup
                        name={numberGroup}
                        list={listUsers}
                    />
                </div>
            }
        </section>
    );
};

export default connect(null, {getListUsers})(UsersPage);