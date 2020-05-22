import { exercisesAPI } from "../api/api";


const
    initialState = {
    };

const exercisesReducer = (state=initialState, action) => {

    switch (action.type) {

        default: return {...state};
    }

};

export default exercisesReducer;


// Actions


// Thunks

// Запрашиваем и добавляем в редакс список заданий
export const addExercises = (file, taskId) => async dispatch => {
    try {
        const res = await exercisesAPI.addExercises(file, taskId);
        console.log(res);
    } catch(error) {
        console.error(error);
    }
};