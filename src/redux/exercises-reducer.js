import { exercisesAPI } from "../api/api";

const
    SET_LIST = 'exercises-reducer/SET_LIST';

const
    initialState = {
        list: null
    };

const exercisesReducer = (state=initialState, action) => {

    switch (action.type) {

        case SET_LIST:
            return {
                ...state,
                list: action.list
            };

        default: return {...state};
    }

};

export default exercisesReducer;


// Actions

export const _setList = list => ({type: SET_LIST, list});

// Thunks

// Добавить ответ на задачу
export const addExercises = (file, taskId) => async dispatch => {
    try {
        const res = await exercisesAPI.addExercises(file, taskId);
        console.log(res);
    } catch(error) {
        console.error(error);
    }
};

// Запрашиваем и добавляем в редакс список заданий
export const getExercises = (group, taskType) => async dispatch => {
    try {
        const {data} = await exercisesAPI.getExercises(group, taskType);

        if (data.ok) {
            dispatch(_setList(data.tasks));
        } else {
            throw new Error(`Ошибка загрузки работ. Группа: ${group}. Тип: ${taskType}`)
        }
    } catch(error) {
        console.error(error);
    }
};

// Поставить оценку
export const setMark = (mark, exerciseId, group, taskType) => async dispatch => {
    try {
        const {data} = await exercisesAPI.setMark(mark, exerciseId);

        if (data.ok) {
            const {data} = await exercisesAPI.getExercises(group, taskType);

            if (data.ok) {
                dispatch(_setList(data.tasks));
            } else {
                throw new Error(`Ошибка загрузки работ. Группа: ${group}. Тип: ${taskType}`)
            }
        } else {
            throw new Error(`Ошибка выставления оценки. Id работы: ${exerciseId}. Оценка: ${mark}`)
        }
    } catch(error) {
        console.error(error);
    }
};