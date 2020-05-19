import React, {useEffect, useState, useCallback} from "react";
import {connect, useSelector} from "react-redux";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";
import {getListTasks} from "../../../redux/tasks-reducer";

import s from "./Tasks.module.less";

import GroupTasks from "./GroupTasks";

import {typeWorks} from "@src/utils/maps";

const TasksPage = ({ getListTasks }) => {

    const
        RedirectToLogin = useRedirectToLogin();

    const
        [typeTask, setTypeTask] = useState('all');

    const
        tasks = useSelector(state => state.tasks.listTasks);

    const
        onChangeTypeTask = useCallback((event) => {
            setTypeTask(event.target.value);
        }, []);

    useEffect(() => {
        document.title = 'Задания | SLR Project';
    });

    useEffect(() => {
        if (!tasks) {
            getListTasks();
        }
    }, [tasks, getListTasks]);

    return (
        RedirectToLogin ||
        <section className={s.main}>
            <h2>Задания</h2>
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