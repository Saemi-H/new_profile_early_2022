import { combineReducers } from 'redux'

import menuReducer from './menuReducers'

export const rootReducer = combineReducers({
    menuReducer,
});