import Instance from './instance';

/**
 * Добавляет токен к заголовкам
 *
 * @param options - Объект заголовков запроса
 * @returns {{Authorization: string}}
 */
function addToken(options={}) {
    return {
        ...options,
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
}

// API авторизации
export const authAPI = {

    // Логин
    async login(login, password) {
        return await Instance.post('/api/v1/login', {login, password});
    },

    // Регистрация
    async register(login, fio, email, phone, group, password) {
        return await Instance.post('/api/v1/register', {login, fio, email, phone, group, password});
    },

    // Проверка авторизации
    async getAuth() {
        return {ok: true};
        // return await Instance.post('/api/v1/auth', {token: localStorage.getItem('token')}, {
        //     headers: addToken()
        // });
    }

};

// API групп
export const groupsAPI = {

    // Получить список групп
    async getListGroups() {
        return await Instance.get('/api/v1/group_names');
    },

    // Получить данные групп
    async getGroups() {
        return await Instance.get('/api/v1/groups', {
            headers: addToken()
        });
    },

    // Добавление новой группы
    async addNewGroup(name, direction) {
        return await Instance.post('/api/v1/group/create', {name, direction}, {
            headers: addToken()
        });
    },

};

// API пользователей
export const usersAPI = {

    // Получить список студентов
    async getUsers() {
        return await Instance.get('/api/v1/users', {
            headers: addToken()
        });
    },

};

// API задач
export const tasksAPI = {

    // Получить список студентов
    async getTasks() {
        return await Instance.get('/api/v1/tasks', {
            headers: addToken()
        });
    },

    // Добавить новое задание

    async addNewTask(task) {
        return await Instance.post('/api/v1/task/create', task, {
            headers: addToken()
        });
    },

};