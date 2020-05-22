import React, {useState, useCallback} from "react";

import s from "./GroupTasks.module.less";

import Table from "@src/components/common/Table";
import NewTask from "../NewTask";

import {typeWorks, statusWorks} from "@src/utils/maps";
import {useSelector} from "react-redux";
import NewExercises from "../NewExercises/NewExercises";

const GroupTasks = ({ tasks, typeTask }) => {

    const
        position = useSelector(state => state.auth.position);

    const
        [showNewTask, setShowNewTask] = useState(false),
        [showNewExercises, setShowNewExercises] = useState(false),
        [idTaskForNewExercises, setIdTaskForNewExercises] = useState(null),
        [nameTaskForNewExercises, setNameTaskForNewExercises] = useState(null);

    const
        onAddNewTask = useCallback(() => {
            setShowNewTask(true);
        }, []),
        onClosePopupNewTask = useCallback(() => {
            setShowNewTask(false);
        }, []),
        onShowMoreInfo = useCallback(() => {
            // TODO: Изменение группы
        }, []),
        onAddNewExercises = useCallback((taskId, taskName) => {
            setShowNewExercises(true);
            setIdTaskForNewExercises(taskId);
            setNameTaskForNewExercises(taskName);
        }, []),
        onClosePopupNewExercises = useCallback(() => {
            setShowNewExercises(false);
        }, []);

    return (
        <section className={s.main}>
            <h3>{typeWorks.get(typeTask)}</h3>
            <Table
                header={
                    position === 'student'
                        ? ['Название', 'Статус', 'Тип работы', 'Выдана', 'Сдать до']
                        : ['Название', 'Группа', 'Статус', 'Тип работы', 'Выдана', 'Сдать до']
                }
                rows={
                    tasks &&
                    tasks.map(task => {
                        const
                            start_date = new Date(task.start_date).toLocaleString("ru"),
                            end_date = new Date(task.end_date).toLocaleString("ru");
                        return (
                            position === 'student'
                                ? [task.id, task.name, statusWorks.get(task.status.toLowerCase()),
                                    typeWorks.get(task.type.toLowerCase()), start_date, end_date]
                                : [task.id, task.name, task.group, statusWorks.get(task.status.toLowerCase()),
                                    typeWorks.get(task.type.toLowerCase()), start_date, end_date])
                    })
                }
                buttonText={'Добавить задание'}
                bigFirst={true}
                addNew={position !== 'student'}
                onAddNew={onAddNewTask}
                handlerClickRow={position === 'student' ? onAddNewExercises : onShowMoreInfo}
            />
            {
                showNewTask && position &&
                <NewTask
                    onWrapperClose={onClosePopupNewTask}
                    typeTask={typeTask}
                />
            }
            {
                showNewExercises && position &&
                <NewExercises
                    onWrapperClose={onClosePopupNewExercises}
                    idTask={idTaskForNewExercises}
                    nameTask={nameTaskForNewExercises}
                />
            }
        </section>
    );
};

export default GroupTasks;