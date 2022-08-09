export const initialState = {
    isAuthenticated: false,
    name: "EMPTY"
}

export const types = {
    INIT: 'init',
    LOGIN: 'login',
    LOGOUT: 'logout'
}

export default function (state, action) {
    console.info("STATE", action.type);

    switch (action.type) {
        case types.INIT:
            return initialState;
        case types.LOGIN:
            return { ...state, isAuthenticated: true, name: "Kasidit" };
        case types.LOGOUT:
            return { ...state, isAuthenticated: false, name: "LOGGEDOUT" };
        default:
            return state;
    }
}