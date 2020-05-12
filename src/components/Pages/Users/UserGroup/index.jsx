import React from "react";

import s from "./UserGroup.module.less";
import Table from "../../../common/Table";

const UserGroup = ({ name }) => {

    return (
        <div className={s.main}>
            <h3>Группа {name}</h3>
            <Table
                header={['ФИО', 'Номер группы', 'Всего работ', 'На проверке', 'Не принято', 'Принято']}
                rows={[
                    ['Иванов Иван Иванович', 4324325, 32, 21, 4, 7],
                    ['Иванов Иван Иванович', 4324325, 32, 21, 4, 7],
                    ['Иванов Иван Иванович', 4324325, 32, 21, 4, 7],
                    ['Иванов Иван Иванович', 4324325, 32, 21, 4, 7],
                    ['Иванов Иван Иванович', 4324325, 32, 21, 4, 7]
                ]}
            />
        </div>
    );
};

export default UserGroup;