import axios from 'axios';
import { async } from 'validate.js';

const ADD_NEW_BUSINESS = 'ADD_NEW_BUSINESS';
const GET_ACCOUNT = 'GET_ACCOUNT';
const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT';
const GET_ALL_PRODUCT = 'CREATE_NEW_PRODUCT';

const initialState = {
    business: {},
    products: {},
}

export const _createAccount = (business) => {
    return {
        type: ADD_NEW_BUSINESS,
        business
    }
}

export const createAccount = (data, userId) => {
    return async(dispatch) => {
        const res = await axios.post('/api/business/newAccount', {data, userId})
        dispatch(_createAccount(res.data))
    }
}
const _getAccount = (business) => {
    return {
        type: GET_ACCOUNT,
        business
    }
}

export const getAccount = (id) => {
    return async(dispatch) => {
        const res = await axios.get(`/api/business/${id}`)
        dispatch(_getAccount(res.data))
    }
}

export const _removeAccount = (business) => {
    return {
        type: REMOVE_ACCOUNT,
        business
    }
}

export const removeAccount = () => {
    return async(dispatch) => {
        dispatch(_removeAccount({}))
    }
}

export const createNewProduct = (data, businessId) =>{
    return async(dispatch) => {
       await axios.post('/api/business/newProduct', {data, businessId})
        const req = await axios.get(`/api/business/allProducts/${businessId}`)
        dispatch(_getAllProducts(req.data))
    }
}

export const _getAllProducts = (products) =>{
    return {
        type: GET_ALL_PRODUCT,
        products
    }
}

export const getAllProducts = (businessId) =>{
    return async(dispatch) => {
        const req = await axios.get(`/api/business/allProducts/${businessId}`)
        dispatch(_getAllProducts(req.data))
    }
}

export default function businessReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_BUSINESS: return {...state, business: action.business}
        case GET_ACCOUNT: return {...state, business: action.business}
        case REMOVE_ACCOUNT: return {...state, business: action.business}
        case GET_ALL_PRODUCT: return { ...state, products: action.products}

        default: return state
    }
}