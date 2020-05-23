import React, {useEffect, useState, useCallback} from "react";
import {connect, useSelector} from "react-redux";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";
import {getListTasks} from "../../../redux/tasks-reducer";

import s from "./Tasks.module.less";

import GroupTasks from "./GroupTasks";

import {typeWorks} from "@src/utils/maps";

const TasksPage = ({ getListTasks, forAllGroup=false }) => {

    const
        RedirectToLogin = useRedirectToLogin();

    const
        [typeTask, setTypeTask] = useState('all'),
        [wasCheckListTask, setWasCheckListTask] = useState(1);

    const
        isAuth = useSelector(state => state.auth.isAuth),
        tasks = useSelector(state => state.tasks.listTasks),
        position = useSelector(state => state.auth.position),
        userNameGroup = useSelector(state => state.auth.groupName);

    const
        onChangeTypeTask = useCallback((event) => {
            setTypeTask(event.target.value);
        }, []);

    useEffect(() => {
        document.title = `Задания${forAllGroup ? ' группы' : ''} | SLR Project`;
    });

    useEffect(() => {
        if (
            (!tasks ||
            (tasks.lab.length === 0 && tasks.course.length === 0 && tasks.test.length === 0))
            && wasCheckListTask > 0 && isAuth
        ) {
            getListTasks(position, userNameGroup, forAllGroup);
            setWasCheckListTask(wasCheckListTask - 1);
        }
    }, [isAuth, wasCheckListTask, tasks, forAllGroup, userNameGroup, position, getListTasks]);

    return (
        RedirectToLogin ||
        <section className={s.main}>
            <h2>Задания{forAllGroup ? ` группы ${userNameGroup}` : ''}</h2>
            <select
                value={typeTask}
                onChange={onChangeTypeTask}
            >
                <option value={'all'}>Все типы работ</option>
                <option value={'lab'}>{typeWorks.get('lab')}</option>
                <option value={'course'}>{typeWorks.get('course')}</option>
                <option value={'test'}>{typeWorks.get('test')}</option>
            </select>
            <div className={s.cardWrapper}>
                {
                    tasks &&
                    (typeTask !== 'all' ?
                        <GroupTasks
                            typeTask={typeTask}
                            tasks={tasks[typeTask]}
                        /> :
                        <>
                            <GroupTasks
                                typeTask={'lab'}
                                tasks={tasks.lab}
                            />
                            <GroupTasks
                                typeTask={'course'}
                                tasks={tasks.course}
                            />
                            <GroupTasks
                                typeTask={'test'}
                                tasks={tasks.test}
                            />
                        </>)
                }
            </div>
        </section>
    );
};

export default connect(null, {getListTasks})(TasksPage);