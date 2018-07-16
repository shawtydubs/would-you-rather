export const AUTHED_USER = 'AUTHED_USER';

export const setAuthedUser = (id) => {
    return {
        type: AUTHED_USER,
        id,
    }
};
