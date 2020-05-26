import React, {useState, useEffect} from "react";
import s from "../../Works/GroupExercises/GroupExercises.module.less";
import Table from "../../../common/Table";
import {statusWorks} from "../../../../utils/maps";
import Popup from "../../../common/Popup";

const InfoByGroup = ({onWrapperClose, taskId=0, tasks}) => {

    const
        [task] = useState(tasks.filter(task => task.id === taskId)[0]),
        [exercisesList, setExercisesList] = useState(task.exercises);

    useEffect(() => {
        setExercisesList(task.exercises);
    }, [task]);

    return (
        <Popup
            onWrapperClose={onWrapperClose}
            style={{
                maxWidth: '95vw'
            }}
        >
            <div className={s.main}>
                <h3 className={s.title}>Просмотр ответов</h3>
                <h4 className={`${s.title} ${s.name}`}>Задание: {task.name}</h4>
                <p className={s.description}>{task.description}</p>
                <Table
                    header={['ФИО', 'Статус', 'Время отправки', 'Оценка']}
                    rows={
                        exercisesList.map(exercises => {
                            const
                                sendDate = new Date(exercises.sendDate).toLocaleString("ru");

                            return [
                                exercises.id, null, null,
                                exercises.fio || 'Нет имени', statusWorks.get(exercises.status),
                                sendDate, exercises.mark ? exercises.mark : 'Нет оценки']
                        })
                    }
                    bigFirst={true}
                />
            </div>
        </Popup>
    );
};

export default InfoByGroup;