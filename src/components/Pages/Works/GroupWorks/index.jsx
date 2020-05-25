import React, {useState, useCallback} from "react";
import {useSelector} from "react-redux";
import {statusWorks} from "./../../../../utils/maps";

import s from "./GroupWorks.module.less";

import Table from "@src/components/common/Table";
import GroupExercises from "../GroupExercises/GroupExercises";

const GroupWorks = ({ nameGroup='', taskType='' }) => {

    const
        listExercises = useSelector(state => state.exercises.list),
        position = useSelector(state => state.auth.position);

    const
        [isShowExercises, setIsShowExercises] = useState(false),

        [taskId, setTaskId] = useState(0),
        [taskName, setTaskName] = useState(''),
        [taskDescription, setTaskDescription] = useState(''),
        [exercisesList, setExercisesList] = useState([]);

    const
        onClickRow = useCallback((data) => {
            setTaskId(data[0]);
            setTaskName(data[3]);
            setExercisesList(data[2]);
            setTaskDescription(data[1]);
            setIsShowExercises(true);
        }, []),
        onClosePopupExercises = useCallback(() => {
            setIsShowExercises(false);
        }, []);

    return (
        <section className={s.main}>
            <h3>Группа {nameGroup}</h3>
            {
                listExercises ?
                <Table
                    header={['Название', 'Статус', 'Всего работ', 'На проверке', 'Не принято', 'Принято', 'Выдана', 'Сдать до']}
                    rows={
                        listExercises.map(task => {
                            const
                                start_date = new Date(task.start_date).toLocaleString("ru"),
                                end_date = new Date(task.end_date).toLocaleString("ru");

                            return [task.id, task.description, task.exercises, task.name, statusWorks.get(task.status), '0', '0', '0', '0', start_date, end_date]
                        })
                    }
                    buttonText={'Добавить задание'}
                    bigFirst={true}
                    handlerClickRow={onClickRow}
                /> :
                    <p>Загрузка...</p>
            }
            {
                isShowExercises && position &&
                <GroupExercises
                    onWrapperClose={onClosePopupExercises}
                    taskId={taskId}
                    taskName={taskName}
                    taskDescription={taskDescription}
                    exercisesList={exercisesList}
                />
            }
        </section>
    );
};

export default GroupWorks;