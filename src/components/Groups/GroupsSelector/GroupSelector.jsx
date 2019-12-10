import React from 'react';

import s from './GroupSelector.module.css';

import GroupSelectorBtn from './GroupSelectorBtn/GroupSelectorBtn';

const GroupSelector = ({ course, setCourse }) => {

    const arrayCourses = new Array(7).fill('').map((e, i) => i===0 ? 'Все курсы' : `${i} курс`);

    return (
        <div className={s.wrapper}>
            {
                arrayCourses.map((e, i) => (
                    <GroupSelectorBtn 
                        setCourse={setCourse}
                        active={course===i}
                        num={i}
                        key={e}
                    >
                        {e}
                    </GroupSelectorBtn>
                ))
            }
        </div>
    );
};

export default GroupSelector;