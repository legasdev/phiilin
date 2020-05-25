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
        [nameTaskForNewExercises, setNameTaskForNewExercises] = useState(null),
        [descriptionTaskForNewExercises, setDescriptionTaskForNewExercises] = useState(null),
        [plagiarismTaskForNewExercises, setPlagiarismTaskForNewExercises] = useState(null),

        [taskId, setTaskId] = useState(0),
        [taskName, setTaskName] = useState(''),
        [taskGroup, setTaskGroup] = useState([]),
        [taskDescription, setTaskDescription] = useState(''),
        [taskDateStart, setTaskDateStart] = useState(null),
        [taskDateEnd, setTaskDateEnd] = useState(null),

        [buttonName, setButtonName] = useState(null);

    const
        onAddNewTask = useCallback(() => {
            setButtonName('Добавить');
            setShowNewTask(true);
        }, []),
        onClosePopupNewTask = useCallback(() => {
            setShowNewTask(false);
        }, []),
        onShowMoreInfo = useCallback((data) => {
            let
                startDate = data[7].replace(', ', 'T').replace(/\./g, '-'),
                endDate = data[8].replace(', ', 'T').replace(/\./g, '-'),
                startYear = startDate.slice(6, 10),
                startDay = startDate.slice(0, 2),
                endYear = endDate.slice(6, 10),
                endDay = endDate.slice(0, 2);

            startDate = startDate.replace(startYear, startDay);
            startDate = startDate.replace(startDay, startYear);
            endDate = endDate.replace(endYear, endDay);
            endDate = endDate.replace(endDay, endYear);

            setButtonName('Обновить');
            setShowNewTask(true);
            setTaskId(data[0]);
            setTaskName(data[3]);
            setTaskGroup(data[4].split(', '));
            setTaskDescription(data[1]);
            setTaskDateStart(startDate);
            setTaskDateEnd(endDate);
        }, []),
        onAddNewExercises = useCallback((data) => {
            setShowNewExercises(true);
            setIdTaskForNewExercises(data[0]);
            setNameTaskForNewExercises(data[3]);
            setDescriptionTaskForNewExercises(data[1]);
            setPlagiarismTaskForNewExercises(data[2]);
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
                        ? ['Название', 'Статус', 'Тип работы', 'Выдана', 'Сдать до', 'Оценка']
                        : ['Название', 'Для групп', 'Статус', 'Тип работы', 'Выдана', 'Сдать до']
                }
                rows={
                    tasks &&
                    tasks.map(task => {
                        const
                            start_date = new Date(task.start_date).toLocaleString("ru"),
                            end_date = new Date(task.end_date).toLocaleString("ru");
                        return (
                            position === 'student'
                                ? [task.id, task.description, null, task.name, statusWorks.get(task.status.toLowerCase()),
                                    typeWorks.get(task.type.toLowerCase()), start_date, end_date,
                                    task.exercises.length > 0 ? task.exercises[0].mark : 'Нет оценки']
                                : [task.id, task.description, null, task.name, task.groups.join(', '), statusWorks.get(task.status.toLowerCase()),
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
                    taskId={taskId}
                    typeTask={typeTask}
                    nameTask={taskName}
                    groupTask={taskGroup}
                    descriptionTask={taskDescription}
                    startDateTask={taskDateStart}
                    endDateTask={taskDateEnd}
                    buttonName={buttonName}
                    isUpdateTask={buttonName === 'Обновить'}
                    closePopup={onClosePopupNewTask}
                />
            }
            {
                showNewExercises && position &&
                <NewExercises
                    onWrapperClose={onClosePopupNewExercises}
                    idTask={idTaskForNewExercises}
                    nameTask={nameTaskForNewExercises}
                    descriptionTask={descriptionTaskForNewExercises}
                    plagiarismTasks={plagiarismTaskForNewExercises}
                />
            }
        </section>
    );
};

export default GroupTasks;