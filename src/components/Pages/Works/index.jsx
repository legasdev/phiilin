import React, {useEffect, useState, useCallback} from "react";
import {connect, useSelector} from "react-redux";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";
import {getExercises} from "../../../redux/exercises-reducer";

import s from "./Works.module.less";

import GroupWorks from "./GroupWorks";

const WorkPage = ({getExercises}) => {

    const
        RedirectToLogin = useRedirectToLogin();

    const
        listGroups = useSelector(state => state.groups.listGroups);

    const
        [numberGroup, setNumberGroup] = useState(''),
        [taskType, setTypeTask] = useState('lab');

    const
        onChangeNumberGroup = useCallback((event) => {
            setNumberGroup(event.target.value);
        }, []),
        onChangeTypeTask = useCallback((event) => {
            setTypeTask(event.target.value);
        }, []);

    useEffect(() => {
        document.title = 'Работы | SLR Project';
    });

    useEffect(() => {
        getExercises(numberGroup, taskType);
    }, [getExercises, numberGroup, taskType]);

    return (
        RedirectToLogin ||
        <section className={s.main}>
            <h2>Работы</h2>
            <select
                value={numberGroup}
                onChange={onChangeNumberGroup}
            >
                <option value="">===[ Выберите номер группы ]===</option>
                {
                    listGroups &&
                    listGroups.map(group => <option key={group} value={group}>{group}</option>)
                }
            </select>
            <select
                value={taskType}
                onChange={onChangeTypeTask}
            >
                <option value="lab">Лабораторная</option>
                <option value="course">Курсовая</option>
                <option value="test">Тестовая</option>
            </select>
            <div className={s.cardWrapper}>
                {
                    numberGroup !== '' &&
                    <>
                        <GroupWorks
                            nameGroup={numberGroup}
                            taskType={taskType}
                        />
                    </>
                }
            </div>
        </section>
    );
};

export default connect(null, {getExercises})(WorkPage);