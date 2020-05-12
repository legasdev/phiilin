import React, {useEffect} from "react";

import s from "./Works.module.less";

import useRedirectToLogin from "@src/hooks/useRedirectLogin";
import GroupWorks from "./GroupWorks";

const WorkPage = props => {

    const
        RedirectToLogin = useRedirectToLogin();

    useEffect(() => {
        document.title = 'Работы | SLR Project';
    });

    return (
        RedirectToLogin ||
        <section className={s.main}>
            <h2>Работы</h2>
            <select name={"groups"}>
                <option value="value1" selected>1234</option>
                <option value="value2">12345</option>
                <option value="value3">12346</option>
            </select>
            <select name={"nameWork"}>
                <option value="value1" selected>Работа 1</option>
                <option value="value2">Работа 2</option>
                <option value="value3">Работа 3</option>
            </select>
            <div className={s.cardWrapper}>
                <GroupWorks
                    nameGroup={'1234'}
                />
                <GroupWorks
                    nameGroup={'4234'}
                />
            </div>
        </section>
    );
};

export default WorkPage;