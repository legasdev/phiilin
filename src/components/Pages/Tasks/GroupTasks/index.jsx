import React, {useState, useCallback} from "react";

import s from "./GroupTasks.module.less";

import Table from "@src/components/common/Table";
import NewWork from "../NewTask";

const GroupTasks = ({ nameGroup }) => {

    const
        [showNewWork, setShowNewWork] = useState(false);

    const
        onAddNew = useCallback(() => {
            setShowNewWork(true);
        }, []),
        onClosePopup = useCallback(() => {
            setShowNewWork(false);
        }, []);

    return (
        <section className={s.main}>
            <h3>Группа {nameGroup}</h3>
            <Table
                header={['Название', 'Статус', 'Всего работ', 'На проверке', 'Не принято', 'Принято', 'Выдана', 'Сдать до']}
                rows={[
                    ['Какое-то очень сложное название из большого количества букв', 'Активна', 32, 21, 4, 7, '21.03.2019', '29.04.2019'],
                    ['Название', 'Активна', 32, 21, 4, 7, '21.03.2019', '29.04.2019'],
                    ['Название', 'Активна', 32, 21, 4, 7, '21.03.2019', '29.04.2019'],
                    ['Название', 'Завершена', 32, 21, 4, 7, '21.03.2019', '29.04.2019'],
                    ['Название', 'Завершена', 32, 21, 4, 7, '21.03.2019', '29.04.2019']
                ]}
                buttonText={'Добавить задание'}
                bigFirst={true}
                addNew={true}
                onAddNew={onAddNew}
            />
            {
                showNewWork &&
                <NewWork
                    onWrapperClose={onClosePopup}
                />
            }
        </section>
    );
};

export default GroupTasks;