import React, {useState, useCallback} from "react";

import s from "./GroupTasks.module.less";

import Table from "@src/components/common/Table";
import NewTask from "../NewTask";

import {typeWorks, statusWorks} from "@src/utils/maps";

const GroupTasks = ({ tasks, typeTask }) => {

    const
        [showNewTask, setShowNewTask] = useState(false);

    const
        onAddNew = useCallback(() => {
            setShowNewTask(true);
        }, []),
        onClosePopup = useCallback(() => {
            setShowNewTask(false);
        }, []);

    return (
        <section className={s.main}>
            <h3>{typeWorks.get(typeTask)}</h3>
            <Table
                header={['Название', 'ID', 'Статус', 'Тип работы', 'Выдана', 'Сдать до']}
                rows={
                    tasks &&
                    tasks.map(task => {
                        const
                            start_date = new Date(task.start_date).toLocaleString("ru"),
                            end_date = new Date(task.end_date).toLocaleString("ru");
                        return [
                            task.name, task.id,
                            statusWorks.get(task.status.toLowerCase()),
                            typeWorks.get(task.type.toLowerCase()),
                            start_date, end_date]
                    })
                }
                buttonText={'Добавить задание'}
                bigFirst={true}
                addNew={true}
                onAddNew={onAddNew}
            />
            {
                showNewTask &&
                <NewTask
                    onWrapperClose={onClosePopup}
                    typeTask={typeTask}
                />
            }
        </section>
    );
};

export default GroupTasks;