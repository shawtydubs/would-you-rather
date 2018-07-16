export const AUTHED_USER = 'AUTHED_USER';

export function setAuthedUser (id) {
    return {
        type: AUTHED_USER,
        id,
    }
}
