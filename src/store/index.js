import {combineReducers, createStore} from 'redux';
import {dashboardReducer} from '../redux/dashboard.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {questionReducer} from '../redux/question.reducer';
const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    question: questionReducer
});
export const store = createStore(rootReducer, composeWithDevTools());
