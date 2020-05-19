import React, {useEffect, useState, useCallback} from "react";

import s from "./Works.module.less";

import useRedirectToLogin from "@src/hooks/useRedirectLogin";
import GroupWorks from "./GroupWorks";

const WorkPage = props => {

    const
        RedirectToLogin = useRedirectToLogin();

    const
        [numberGroup, setNumberGroup] = useState('');

    const
        onChangeNumberGroup = useCallback((event) => {
            setNumberGroup(event.target.value);
        }, []);

    useEffect(() => {
        document.title = 'Работы | SLR Project';
    });

    return (
        RedirectToLogin ||
        <section className={s.main}>
            <h2>Работы</h2>
            <select
                value={numberGroup}
                onChange={onChangeNumberGroup}
            >
                <option value="">===[ Выберите номер группы ]===</option>
                <option value="1234">1234</option>
                <option value="4324ИИ">4324ИИ</option>
            </select>
            <div className={s.cardWrapper}>
                {
                    numberGroup !== '' &&
                    <>
                        <GroupWorks
                            nameGroup={'1234'}
                        />
                        <GroupWorks
                            nameGroup={'4324ИИ'}
                        />
                    </>
                }
            </div>
        </section>
    );
};

export default WorkPage;