import Instance from './instance';

// Апи авторизации
export const authAPI = {

    // Получить данные о своей авторизации
    async getMe() {
        return await Instance.get('/auth/me');
    },

    // Логин
    async login(login, password) {
        return await Instance.post('/auth/login', {login, password});
    },

}