import React, {useCallback} from "react";
import Popup from "../../../common/Popup";
import {statusWorks} from "./../../../../utils/maps";

import s from "./GroupExercises.module.less";
import Table from "../../../common/Table";

const GroupExercises = ({onWrapperClose, taskName, taskDescription, exercisesList}) => {

    const
        onChangeMark = useCallback((event, exerciseId) => {
            console.log(event.target.value, exerciseId);
        }, []);

    return (
        <Popup
            onWrapperClose={onWrapperClose}
            style={{
                maxWidth: '95vw'
            }}
        >
            <div className={s.main}>
                <h3 className={s.title}>Просмотр ответов</h3>
                <h4 className={`${s.title} ${s.name}`}>Задание: {taskName}</h4>
                <p className={s.description}>{taskDescription}</p>
                <Table
                    header={['ФИО', 'Статус', 'Время отправки', 'Антиплагиат', 'Ссылка', 'Оценка']}
                    rows={
                        exercisesList.map(exercises => {
                            const
                                sendDate = new Date(exercises.sendDate).toLocaleString("ru");

                            return [
                                exercises.id, null, null,
                                exercises.name || 'Нет имени', statusWorks.get(exercises.status), sendDate, exercises.plagiarism,
                                {
                                    name: 'link',
                                    value: exercises.path
                                },
                                {
                                    name: 'select',
                                    value: onChangeMark,
                                    selectValue: exercises.mark
                                }]
                        })
                    }
                    bigFirst={true}
                />
            </div>
        </Popup>
    );
};

export default GroupExercises;

