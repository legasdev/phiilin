import React, {useCallback, useState} from "react";
import {connect, useSelector} from "react-redux";
import {addNewTask, deleteTask} from "../../../../redux/tasks-reducer";
import {typeWorks} from "@src/utils/maps";

import s from './NewTask.module.less';

import Popup from "../../../common/Popup";
import Input from "../../../common/Form/Input";
import Button from "../../../common/Button";
import Form from "../../../common/Form";
import Textarea from "../../../common/Form/Textarea";
import Select from "../../../common/Form/Select";
import MultipleSelect from "../../../common/Form/MultipleSelect";

const NewTask = ({ onWrapperClose, taskId, typeTask='lab', nameTask='', groupTask=[], descriptionTask='',
                     startDateTask, endDateTask, buttonName='Добавить', addNewTask, isUpdateTask=false,
                     deleteTask, closePopup }) => {

    const
        listGroups = useSelector(state => state.groups.listGroups);

    const
        [taskName, setTaskName] = useState(nameTask),
        [taskType, setTaskType] = useState(typeTask),
        [taskGroup, setTaskGroup] = useState(groupTask),
        [taskDescription, setTaskDescription] = useState(descriptionTask),
        [minDateToSetup] = useState(startDateTask || new Date().toISOString().slice(0, -8)),
        [taskDateStart, setTaskDateStart] = useState(startDateTask || minDateToSetup),
        [taskDateEnd, setTaskDateEnd] = useState(endDateTask || minDateToSetup);

    const
        onSubmit = useCallback(() => {
            addNewTask({
                name: taskName,
                type: taskType,
                groups: taskGroup,
                description: taskDescription,
                start_date: taskDateStart,
                end_date: taskDateEnd
            })
        },[addNewTask, taskName, taskType, taskGroup, taskDescription, taskDateStart, taskDateEnd]),
        onDeleteTask = useCallback(() => {
            deleteTask(taskId);
            closePopup();
        }, [taskId, deleteTask, closePopup]),
        onChangeTaskName = useCallback((event) => {
            setTaskName(event.target.value);
        },[]),
        onChangeTypeTask = useCallback(({value}) => {
            setTaskType(value);
        }, []),
        onChangeGroupTask = useCallback((values) => {
            setTaskGroup(values.map(item => item.value));
        }, []),
        onChangeDescriptionTask = useCallback((event) => {
            setTaskDescription(event.target.value);
        }, []),
        onChangeDateStartTask = useCallback((event) => {
            setTaskDateStart(event.target.value);
        },[]),
        onChangeDateEndTask = useCallback((event) => {
            setTaskDateEnd(event.target.value);
        },[]);

    return (
        <Popup
            onWrapperClose={onWrapperClose}
            style={{
                maxWidth: '680px'
            }}
        >
            <div className={s.main}>
                <h3 className={s.title}>Добавить задание</h3>
                <div className={s.wrapper}>
                    <Form
                        onSubmit={onSubmit}
                        style={{
                            maxWidth: '680px',
                            marginTop: '0'
                        }}
                    >
                        <Input
                            name={'taskName'}
                            label={'Название работы'}
                            type={'text'}
                            placeholder={'Например, Курсовая работа'}
                            onChange={onChangeTaskName}
                            value={taskName}
                        />
                        <Select
                            values={[
                                {name: typeWorks.get('lab'), value: 'lab'},
                                {name: typeWorks.get('course'), value: 'course'},
                                {name: typeWorks.get('test'), value: 'test'}
                            ]}
                            firstSelectValue={typeTask}
                            onChange={onChangeTypeTask}
                            style={{
                                width: '100%',
                                zIndex: 3
                            }}
                        />
                        <MultipleSelect
                            values={
                                listGroups &&
                                listGroups.map(group => ({name: group, value: group}))
                            }
                            firstSelectValue={groupTask && groupTask.length > 0 && groupTask[0] && groupTask }
                            placeholder={'Для каких групп'}
                            onChange={onChangeGroupTask}
                            style={{
                                width: '100%'
                            }}
                        />
                        <Textarea
                            name={'taskDescription'}
                            label={'Введите описание'}
                            onChange={onChangeDescriptionTask}
                            value={taskDescription}
                        />
                        <Input
                            name={'dateStart'}
                            label={'Выдана'}
                            type={'datetime-local'}
                            step={'1'}
                            min={minDateToSetup}
                            onChange={onChangeDateStartTask}
                            value={taskDateStart}
                        />
                        <Input
                            name={'dateEnd'}
                            label={'Сдать до'}
                            type={'datetime-local'}
                            step={'1'}
                            onChange={onChangeDateEndTask}
                            value={taskDateEnd}
                        />
                        <Button type={'submit'}>{buttonName}</Button>
                    </Form>
                    {
                        isUpdateTask &&
                        <Button
                            light
                            onClick={onDeleteTask}
                        >Удалить</Button>
                    }
                </div>
            </div>
        </Popup>
    )
};

export default connect(null, {addNewTask, deleteTask})(NewTask);