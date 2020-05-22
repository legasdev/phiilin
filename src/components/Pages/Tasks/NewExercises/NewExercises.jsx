import React, {useCallback, useRef} from "react";
import {connect} from "react-redux";
import {addExercises} from "../../../../redux/exercises-reducer";

import s from "./NewExercises.module.less";

import Popup from "../../../common/Popup";

const NewExercises = ({onWrapperClose, idTask, nameTask, addExercises}) => {

    const
        fileRef = useRef(null);

    const
        onAddExercises = useCallback((event) => {
            event.preventDefault();
            const
                file = fileRef.current.files[0];

            addExercises(file, idTask);
        }, [addExercises, idTask]);

    return (
        <Popup
            onWrapperClose={onWrapperClose}
            style={{
                maxWidth: '680px'
            }}
        >
            <div className={s.main}>
                <h3 className={s.title}>Добавить ответ на задание</h3>
                <h4 className={`${s.title} ${s.name}`}>{nameTask}</h4>
                <div className={s.wrapper}>
                    <form onSubmit={onAddExercises}>
                        <input type={'file'} accept={'.java,.cpp,.c'} ref={fileRef}/>
                        <button type={'submit'}>Отправить ответ</button>
                    </form>
                </div>
            </div>
        </Popup>
    );
};

export default connect(null, {addExercises})(NewExercises);