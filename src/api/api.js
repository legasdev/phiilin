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

};

// API групп
export const groupsAPI = {

    async getGroups() {
        return await Instance.get('/api/v1/groups', {
            headers: addToken()
        });
    },

};

// API пользователей
export const usersAPI = {

};