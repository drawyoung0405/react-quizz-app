export const SET_CATEGORY = 'DASHBOARD/SET_CATEGORY';
export const SET_DIFFICULTY = 'DASHBOARD/SET_DIFFICULTY';
export const SET_TYPE = 'DASHBOARD/SET_TYPE';
export const SET_AMOUNT = 'DASHBOARD/SET_AMOUNT';
export const SET_USER = 'DASHBOARD/SET_USER';

export const setCategory = (categoryId) => {
    return {
        type: SET_CATEGORY,
        payload: categoryId
    }
}
export const setDifficulty = (difficulty) => {
    return {
        type: SET_DIFFICULTY,
        payload: difficulty
    }
}
export const setType = (type) => {
    return {
        type: SET_TYPE,
        payload: type
    }
}
export const setAmount = (amount) => {
    return {
        type: SET_AMOUNT,
        payload: amount
    }
}
export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}