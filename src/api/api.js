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
        return await Instance.post('/api/v1/auth', {token: localStorage.getItem('token')}, {});
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
    async getUsers(group) {
        return await Instance.post('/api/v1/students/in_group', {group}, {
            headers: addToken()
        });
    },

};

// API задач
export const tasksAPI = {

    // Получить список заданий
    async getTasks(position, group) {

        if (position === 'student') {
            return await Instance.post('/api/v1/tasks/for_group', {group}, {
                headers: addToken()
            });
        }

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

    // Удалить таску
    async deleteTask(id) {
        return await Instance.post('/api/v1/task/delete', {id}, {
            headers: addToken()
        });
    },

    // Проверить на антиплагиат
    async checkPlagiarism(taskId) {
        return await Instance.post('/api/v1/task/plagiarism_check', {taskId}, {
            headers: addToken()
        });
    },

};

// API ответов на задачи
export const exercisesAPI = {

    // Отправить ответ на задание
    async addExercises(file, taskId) {
        const
            formData = new FormData();

        formData.append('file', file);
        formData.append('properties', new Blob([JSON.stringify({'taskId': taskId})], {
            type: "application/json"
        }));

        return await Instance.post('/api/v1/exercise/create', formData, {
            headers: addToken(),
            'Content-Type': undefined
        });
    },

    // Получить работы студентов в группе по типу
    async getExercises(group, taskType) {
        return await Instance.post('/api/v1/exercises/for_group', {group, taskType}, {
            headers: addToken()
        });
    },

    // Изменить оценку
    async setMark(mark, id) {
        return await Instance.post('/api/v1/exercise/mark', {mark, id}, {
            headers: addToken()
        });
    },

};