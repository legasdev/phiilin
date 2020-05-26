import React, {useCallback} from "react";
import {connect} from "react-redux";
import Popup from "../../../common/Popup";
import {statusWorks} from "./../../../../utils/maps";
import {setMark} from "../../../../redux/exercises-reducer";
import {checkPlagiarism} from "../../../../redux/tasks-reducer";

import s from "./GroupExercises.module.less";
import Table from "../../../common/Table";

const GroupExercises = ({onWrapperClose, nameGroup, taskId, taskType, taskName, taskDescription, exercisesList, setMark, checkPlagiarism}) => {

    const
        onChangeMark = useCallback((value, exerciseId) => {
            setMark(value, exerciseId, nameGroup, taskType);
        }, [setMark, nameGroup, taskType]),
        onCheckPlagiarism = useCallback(() => {
            checkPlagiarism(taskId);
        }, [taskId, checkPlagiarism]);

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
                                exercises.fio || 'Нет имени', statusWorks.get(exercises.status), sendDate,
                                exercises.plagiarism > 0 ?
                                exercises.plagiarism :
                                    {
                                        name: 'button',
                                        value: onCheckPlagiarism,
                                    },
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

export default connect(null, {setMark, checkPlagiarism})(GroupExercises);

