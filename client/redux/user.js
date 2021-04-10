import axios from 'axios';

const GET_USER = 'GET_USER';
const LOGIN_USER = 'LOGIN_USER';
const CREATE_USER = 'CREATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const SHOW_ALL_ACCOUNTS = 'SHOW_ALL_ACCOUNTS';

const initialState = {
    user: {},
    showAccounts: false
}

export const _logoutUser = (user) => {
    return {
        type: LOGOUT_USER,
        user
    }
}

export const logoutUser = () => {
    return async(dispatch) => {
        await axios.post('/api/logout')
        const res = await axios.get('/api/users/get-user')
        dispatch(_logoutUser(res.data))
    }
}
export const _showAllAccounts = (accounts) => {
    return {
        type: SHOW_ALL_ACCOUNTS,
        accounts
    }
}
export const showAllAccounts = (data) => {
    return async(dispatch) => {
        dispatch(_showAllAccounts(data))
    }
}
export const _getUser = (user) => {
    return {
    type: GET_USER,
    user
}}

export const getUser = () => {
    return async(dispatch) => {
        const res = await axios.get('/api/users/get-user')
        dispatch(_getUser(res.data))
    }
}

export const _createUser = (user) => {
    return {
    type: CREATE_USER,
    user
}}

export const createUser = (data) => {
    return async(dispatch) => {
        const res = await axios.post('/api/users/create', data)
        dispatch(_createUser(res.data))
    }
}

export const _loginUser = (user) => {
    return{
        type: LOGIN_USER,
        user
    }
}

export const loginUser =  (credentials) =>{
    return async (dispatch) =>{
        const res= await axios.post('/api/login', credentials)
        
        dispatch(_loginUser(res.data))
    }
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER: return {...state, user: action.user}
        case LOGIN_USER:  return {...state, user: action.user}
        case LOGOUT_USER: return {...state, user: action.user}
        case CREATE_USER: return {...state, user: action.user}
        case SHOW_ALL_ACCOUNTS: return {...state, showAccounts: action.accounts}
        default: return state
    }
}

