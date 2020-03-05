import Instance from './instance';

// API авторизации
export const authAPI = {

    // Логин
    async login(login, password) {
        return await Instance.post('/login', {login, password});
    },

};

// API групп
export const groupsAPI = {

};

// API пользователей
export const usersAPI = {

};