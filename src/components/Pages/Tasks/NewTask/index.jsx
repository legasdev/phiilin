import React, {useCallback, useState} from "react";

import s from './NewTask.module.less';

import Popup from "../../../common/Popup";
import Input from "../../../common/Form/Input";
import Button from "../../../common/Button";
import Form from "../../../common/Form";

const NewTask = ({ onWrapperClose }) => {

    const
        [taskName, setTaskName] = useState('');

    const
        onSubmit = useCallback(() => {
            // TODO: Добавить добавление работы
        },[]),
        onChangeWorkName = useCallback((event) => {
            setTaskName(event.target.value);
        },[]);

    return (
        <Popup
            onWrapperClose={onWrapperClose}
        >
            <div className={s.main}>
                <h3 className={s.title}>Добавить задание</h3>
                <Form
                    onSubmit={onSubmit}
                >
                    <Input
                        name={'groupName'}
                        label={'Введите номер группы'}
                        type={'text'}
                        placeholder={'Например, 1234'}
                        onChange={onChangeWorkName}
                        value={taskName}
                    />
                    <Button type={'submit'}>Добавить</Button>
                </Form>
            </div>
        </Popup>
    )
};

export default NewTask;