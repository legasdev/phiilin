import React from "react";

import s from "./UserGroup.module.less";
import Table from "../../../common/Table";

const UserGroup = ({ name, list }) => {

    return (
        <div className={s.main}>
            <h3>Группа {name}</h3>
            <Table
                header={['ФИО', 'Телефон', 'Email']}
                rows={
                    list &&
                    list.map(user => [user.id, null, null, user.fio, user.phone, user.email])
                }
                bigFirst
            />
        </div>
    );
};

export default UserGroup;