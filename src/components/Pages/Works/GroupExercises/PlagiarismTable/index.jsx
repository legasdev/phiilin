import React from "react";
import Popup from "../../../../common/Popup";
import s from "./PlagiarismTable.module.less";
import Table from "../../../../common/Table";
import {useSelector} from "react-redux";

const PlagiarismTable = ({onWrapperClose, userName='', taskName=''}) => {

    const
        plagiarismList = useSelector(state => state.tasks.listPlagiarism);

    return (
        <Popup
            onWrapperClose={onWrapperClose}
            style={{
                maxWidth: '1000px',
                zIndex: '10000'
            }}
        >
            <div className={s.main}>
                <h3 className={s.title}>Проверка на плагиат</h3>
                <p className={s.description}><b>Задание</b>: {taskName}</p>
                <p className={s.description}><b>Работа студента</b>: {userName}</p>
                {
                    plagiarismList && plagiarismList.length > 0 ?
                        <Table
                            header={['ФИО', 'Группа', 'Направление', 'Процент совпадения']}
                            rows={
                                plagiarismList.map(item => ([
                                    null, null, null,
                                    item.comparedUser.fio, item.comparedUser.groupName,
                                    item.comparedUser.groupDirection, {
                                        name: 'percent',
                                        value: item.plagiarism
                                    }
                                ]))
                            }
                            bigFirst={true}
                        /> :
                        <p className={s.description}>Совпадений нет</p>
                }
            </div>
        </Popup>
    );
};

export default PlagiarismTable;