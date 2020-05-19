import React, {useCallback, useState} from "react";
import {connect, useSelector} from "react-redux";
import {addNewTask} from "../../../../redux/tasks-reducer";

import s from './NewTask.module.less';

import Popup from "../../../common/Popup";
import Input from "../../../common/Form/Input";
import Button from "../../../common/Button";
import Form from "../../../common/Form";
import Textarea from "../../../common/Form/Textarea";

const NewTask = ({ onWrapperClose, addNewTask, typeTask='lab' }) => {

    const
        listGroups = useSelector(state => state.groups.listGroups);

    const
        [taskName, setTaskName] = useState(''),
        [taskType, setTaskType] = useState(typeTask),
        [taskGroup, setTaskGroup] = useState([]),
        [taskDescription, setTaskDescription] = useState(''),
        [minDateToSetup] = useState(new Date().toISOString().slice(0, -8)),
        [taskDateStart, setTaskDateStart] = useState(minDateToSetup),
        [taskDateEnd, setTaskDateEnd] = useState(minDateToSetup);

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
        onChangeTaskName = useCallback((event) => {
            setTaskName(event.target.value);
        },[]),
        onChangeTypeTask = useCallback((event) => {
            setTaskType(event.target.value);
        }, []),
        onChangeGroupTask = useCallback((event) => {
            setTaskGroup([...event.target.options].filter(option => option.selected).map(option => option.value));
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
                        <select
                            name={'taskType'}
                            value={taskType}
                            onChange={onChangeTypeTask}
                            style={{
                                width: '100%'
                            }}
                        >
                            <option value="lab">Лабораторная</option>
                            <option value="course">Курсовая</option>
                            <option value="test">Тестовая</option>
                        </select>
                        <select
                            name={'taskGroups'}
                            value={taskGroup}
                            onChange={onChangeGroupTask}
                            multiple={true}
                            size={5}
                            style={{
                                width: '100%'
                            }}
                        >
                            {
                                listGroups &&
                                listGroups.map(group => <option key={group} value={group}>{group}</option>)
                            }
                        </select>
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
                        <Button type={'submit'}>Добавить</Button>
                    </Form>
                </div>
            </div>
        </Popup>
    )
};

export default connect(null, {addNewTask})(NewTask);