import React, {useCallback, useState} from "react";
import {connect} from "react-redux";

import s from './NewGroup.module.less';

import Popup from "../../../common/Popup";
import Input from "../../../common/Form/Input";
import Button from "../../../common/Button";
import Form from "../../../common/Form";
import Textarea from "../../../common/Form/Textarea";
import {addNewGroup} from "../../../../redux/groups-reducer";

const NewGroup = ({onWrapperClose, addNewGroup}) => {

    const
        [groupName, setGroupName] = useState(''),
        [groupDirection, setGroupDirection] = useState('');

    const
        onSubmit = useCallback(() => {
            addNewGroup(groupName, groupDirection);
            setGroupName('');
            setGroupDirection('');
        },[addNewGroup, groupName, groupDirection]),
        onChangeNameGroup = useCallback((event) => {
            setGroupName(event.target.value);
        },[]),
        onChangeDirectionGroup = useCallback((event) => {
            setGroupDirection(event.target.value);
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
                        name={'name'}
                        label={'Введите номер группы'}
                        type={'text'}
                        placeholder={'Например, 1234'}
                        onChange={onChangeNameGroup}
                        value={groupName}
                    />
                    <Textarea
                        name={'direction'}
                        label={'Введите описание'}
                        placeholder={'Например, ФИИТ'}
                        onChange={onChangeDirectionGroup}
                        value={groupDirection}
                    />
                    <Button type={'submit'}>Добавить</Button>
                </Form>
            </div>
        </Popup>
    )
};

export default connect(null, {addNewGroup})(NewGroup);