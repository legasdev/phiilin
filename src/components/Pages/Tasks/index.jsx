import React, {useEffect} from "react";

import s from "./Tasks.module.less";

import useRedirectToLogin from "@src/hooks/useRedirectLogin";
import GroupTasks from "./GroupTasks";

const TasksPage = props => {

    const
        RedirectToLogin = useRedirectToLogin();

    useEffect(() => {
        document.title = 'Задания | SLR Project';
    });

    return (
        RedirectToLogin ||
        <section className={s.main}>
            <h2>Задания</h2>
            <div className={s.cardWrapper}>
                <GroupTasks
                    nameGroup={'1234'}
                />
                <GroupTasks
                    nameGroup={'4234'}
                />
            </div>
        </section>
    );
};

export default TasksPage;