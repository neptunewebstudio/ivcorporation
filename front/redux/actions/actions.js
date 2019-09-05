import * as ActionTypes from '../../consts/actionTypes';

export const RESET_APP = () => {
    return { type: ActionTypes.RESET_APP };
};
export const OPEN = (params) => {
    return {
        type: ActionTypes.OPEN,
        params,
    };
};
export const CHANGE_LANG = (lang) => {
    return {
        type: ActionTypes.CHANGE_LANG,
        lang,
    };
};
export const SHOW_SNACKBAR = (msg) => {
    return {
        type: ActionTypes.SHOW_SNACKBAR,
        msg,
    };
};
export const CLOSE_SNACKBAR = () => {
    return { type: ActionTypes.CLOSE_SNACKBAR };
};