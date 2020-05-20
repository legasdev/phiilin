import { tasksAPI } from "../api/api";

// function createObjectByTypeTask(typeTask, tasks) {
//     return {
//         type: typeTask,
//         tasks: tasks.filter(task => task.type.toLowerCase() === typeTask.toLowerCase())
//     }
// }

const
    SET_LIST_TASKS = 'tasks/set_list_tasks';

const
    initialState = {
        listTasks: null,
    };

const tasksReducer = (state=initialState, action) => {

    switch (action.type) {

        case SET_LIST_TASKS:
            return {
                ...state,
                listTasks: action.listTasks
            };

        default: return {...state};
    }

};

export default tasksReducer;


// Actions

export const _setListTasks = listTasks => ({type: SET_LIST_TASKS, listTasks});


// Thunks

// Запрашиваем и добавляем в редакс список студентов
export const getListTasks = (position, group, forAll=false) => async dispatch => {
    try {
        const {data} = await tasksAPI.getTasks(position, group);
        if (data.ok) {
            console.log(data.tasks);
            dispatch(_setListTasks({
                'lab': data.tasks.filter(task => task.type.toLowerCase() === 'lab'),
                'course': data.tasks.filter(task => task.type.toLowerCase() === 'course'),
                'test': data.tasks.filter(task => task.type.toLowerCase() === 'test'),
            }));
        } else {
            throw new Error('Данные не были получены');
        }
    } catch(error) {
        console.error(error);
    }
};

// Добавить новое задание
export const addNewTask = task => async dispatch => {
    try {
        const {response} = await tasksAPI.addNewTask(task);
        if (response.ok) {
            const {data} = await tasksAPI.getTasks();
            if (data.ok) {
                dispatch(_setListTasks(data.tasks));
            } else {
                throw new Error('Данные не были получены');
            }
        } else {
            throw new Error('Данные не были получены');
        }
    } catch(error) {
        console.error(error);
    }
};