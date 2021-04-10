import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './user'
import businessReducer from './business'


const appReductor = combineReducers({
    user: userReducer,
    business: businessReducer
})

const store = createStore(appReductor, applyMiddleware(thunk))
export default store