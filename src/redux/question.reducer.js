import { UPDATE_SCORE } from './question.action'
const initialState = {
    score: 0
}
export const questionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_SCORE: {
            return {
                score: state.score + payload
            }
        }
        default:
            return state
    }
}