import React, {useState, useCallback} from "react";

import s from "./GroupWorks.module.less";

import Table from "@src/components/common/Table";
import {useSelector} from "react-redux";
import GroupExercises from "../GroupExercises/GroupExercises";

const GroupWorks = ({ nameGroup='', taskType='' }) => {

    const
        listExercises = useSelector(state => state.exercises.list),
        position = useSelector(state => state.auth.position);

    const
        [isShowExercises, setIsShowExercises] = useState(false),

        [taskName, setTaskName] = useState(''),
        [taskDescription, setTaskDescription] = useState(''),
        [exercisesList, setExercisesList] = useState([]);

    const
        onClickRow = useCallback((data) => {
            console.log(data);
            setTaskName(data[1]);
            setExercisesList(data[2]);
            setTaskDescription(data[3]);
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

                            return [task.id, task.description, task.exercises, task.name, task.status, '0', '0', '0', '0', start_date, end_date]
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
                    taskName={taskName}
                    taskDescription={taskDescription}
                    exercisesList={exercisesList}
                />
            }
        </section>
    );
};

export default GroupWorks;