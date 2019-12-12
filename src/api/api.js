import Instance from './instance';

// API авторизации
export const authAPI = {

    // Получить данные о своей авторизации
    async getMe() {
        return await Instance.get('/auth/me');
    },

    // Логин
    async login(login, password) {
        return await Instance.post('/auth/login', {login, password});
    },

    // Выход (Разлогин)
    async logout() {
        return await Instance.delete('/auth/login');
    },

};

// API групп
export const groupsAPI = {

    // Получить список групп
    async getGroups() {
        return await Instance.get('/groups');
    },

    // Добавить новую группу
    async addNewGroup(data) {
        return await Instance.post('/groups/add', data);
    },

};