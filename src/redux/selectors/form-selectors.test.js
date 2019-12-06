import { getLoginError } from "./form-selectors";

/**
 * 
 * Тесты селекоторов форм
 * 
 * 
*/

it('Селектор ошибки при авторизации', () => {

    const state = {
        auth: {
            loginError: false
        }
    }

    const res = getLoginError(state);

    expect(res).toBe(false);
});