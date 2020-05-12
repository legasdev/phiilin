import React, {useCallback, useState} from "react";

import s from './NewGroup.module.less';

import Popup from "../../../common/Popup";
import Input from "../../../common/Form/Input";
import Button from "../../../common/Button";
import Form from "../../../common/Form";

const NewGroup = ({onWrapperClose}) => {

    const
        [groupName, setGroupName] = useState('');

    const
        onSubmit = useCallback(() => {
            // TODO: Добавить добавление группы
        },[]),
        onChangeNameGroup = useCallback((event) => {
            setGroupName(event.target.value);
        },[]);

    return (
        <Popup
            onWrapperClose={onWrapperClose}
        >
            <div className={s.main}>
                <h3 className={s.title}>Добавить новую группу</h3>
                <Form
                    onSubmit={onSubmit}
                >
                    <Input
                        name={'groupName'}
                        label={'Введите номер группы'}
                        type={'text'}
                        placeholder={'Например, 1234'}
                        onChange={onChangeNameGroup}
                        value={groupName}
                    />
                    <Button type={'submit'}>Добавить</Button>
                </Form>
            </div>
        </Popup>
    )
};

export default NewGroup;