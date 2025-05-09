import {combineReducers, createStore} from 'redux';
import {dashboardReducer} from '../redux/dashboard.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
    dashboard: dashboardReducer
});
export const store = createStore(rootReducer, composeWithDevTools());
