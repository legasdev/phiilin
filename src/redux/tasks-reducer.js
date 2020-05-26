import { tasksAPI } from "../api/api";

/**
 * Получает список заданий и добавляет в редакс
 *
 * @param dispatch
 * @param position
 * @param group
 * @returns {Promise<void>}
 */
async function getTasks(dispatch, position, group) {
    const {data} = await tasksAPI.getTasks(position, group);

    if (data.ok) {
        dispatch(_setListTasks({
            'lab': data.tasks.filter(task => task.type.toLowerCase() === 'lab'),
            'course': data.tasks.filter(task => task.type.toLowerCase() === 'course'),
            'test': data.tasks.filter(task => task.type.toLowerCase() === 'test'),
        }));
    } else {
        throw new Error('Данные не были получены');
    }
}

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

// Запрашиваем и добавляем в редакс список заданий
export const getListTasks = (position, group) => async dispatch => {
    try {
        await getTasks(dispatch, position, group);

    } catch(error) {
        console.error(error);
    }
};

// Добавить новое задание
export const addNewTask = task => async dispatch => {
    try {
        const {data} = await tasksAPI.addNewTask(task);

        if (data.ok) {
            await getTasks(dispatch);

        } else {
            throw new Error('Данные не были получены');
        }
    } catch(error) {
        console.error(error);
    }
};

// Удалить задание
export const deleteTask = id => async dispatch => {
    try {
        const {data} = await tasksAPI.deleteTask(id);

        if (data.ok) {
            await getTasks(dispatch);

        } else {
            throw new Error('Данные не были получены');
        }
    } catch(error) {
        console.error(error);
    }
};

// Проверить на антиплагиат
export const checkPlagiarism = taskId => async dispatch => {
    try {
        const {data} = await tasksAPI.checkPlagiarism(taskId);

        if (data.ok) {
            await getTasks(dispatch);

        } else {
            throw new Error('Данные не были получены');
        }
    } catch(error) {
        console.error(error);
    }
};