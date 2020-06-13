import React, {useEffect, useState, useCallback} from "react";
import {connect, useSelector} from "react-redux";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";
import {getExercises} from "../../../redux/exercises-reducer";

import s from "./Works.module.less";

import GroupWorks from "./GroupWorks";
import Select from "../../common/Form/Select";

const WorkPage = ({getExercises}) => {

    const
        RedirectToLogin = useRedirectToLogin();

    const
        listGroups = useSelector(state => state.groups.listGroups);

    const
        [numberGroup, setNumberGroup] = useState(''),
        [taskType, setTypeTask] = useState('lab');

    const
        onChangeNumberGroup = useCallback(({value}) => {
            setNumberGroup(value);
        }, []),
        onChangeTypeTask = useCallback(({value}) => {
            setTypeTask(value);
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
            <div className={s.filters}>
                <Select
                    isMini
                    values={listGroups && [
                        {name: 'Выберите группу', value: ''},
                        ...listGroups.map(group => ({name: group, value: group}))
                    ]}
                    onChange={onChangeNumberGroup}
                />
                <Select
                    isMini
                    values={[
                        {name: 'Лабораторная', value: 'lab'},
                        {name: 'Курсовая', value: 'course'},
                        {name: 'Тестовая', value: 'test'},
                    ]}
                    onChange={onChangeTypeTask}
                />
            </div>
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