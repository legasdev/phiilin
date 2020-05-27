import React, {useCallback, useState} from "react";
import {connect} from "react-redux";
import Popup from "../../../common/Popup";
import {statusWorks} from "./../../../../utils/maps";
import {setMark} from "../../../../redux/exercises-reducer";
import {checkPlagiarism} from "../../../../redux/tasks-reducer";

import s from "./GroupExercises.module.less";
import Table from "../../../common/Table";
import PlagiarismTable from "./PlagiarismTable";

const GroupExercises = ({onWrapperClose, nameGroup, taskId, taskType, taskName, taskDescription, exercisesList, setMark, checkPlagiarism}) => {

    const
        [showPlagiarism, setShowPlagiarism] = useState(false),

        [userName, setUserName] = useState('');

    const
        onChangeMark = useCallback((value, exerciseId) => {
            setMark(value, exerciseId, nameGroup, taskType);
        }, [setMark, nameGroup, taskType]),
        onCheckPlagiarism = useCallback((data) => {
            checkPlagiarism(taskId, data.id);
            setUserName(data.name);
            setShowPlagiarism(true);
        }, [taskId, checkPlagiarism]),
        onHidePlagiarism = useCallback(() => {
            setShowPlagiarism(false);
        }, []);

    return (
        <>
            <Popup
                onWrapperClose={onWrapperClose}
                style={{
                    maxWidth: '95vw'
                }}
            >
                <div className={s.main}>
                    <h3 className={s.title}>Просмотр ответов</h3>
                    <p className={s.description}><b>Задание</b>: {taskName}</p>
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
                                            data: {
                                                id: exercises.id,
                                                name: exercises.fio
                                            }
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
            {
                showPlagiarism &&
                <PlagiarismTable
                    onWrapperClose={onHidePlagiarism}
                    userName={userName}
                    taskName={taskName}
                />
            }
        </>
    );
};

export default connect(null, {setMark, checkPlagiarism})(GroupExercises);

