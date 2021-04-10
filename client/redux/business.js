import axios from 'axios';

const ADD_NEW_BUSINESS = 'ADD_NEW_BUSINESS';
const GET_BUSINESS = 'GET_BUSINESS';
const GET_ALL_PRODUCTS = 'CREATE_NEW_PRODUCTS';

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
export const _getBusiness = (business) => {
    return {
        type: GET_BUSINESS,
        business
    }
}

export const getBusiness = (id) => {
    return async(dispatch) => {
        const res = await axios.get(`/api/business/${id}`)
        dispatch(_getBusiness(res.data))
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
        type: GET_ALL_PRODUCTS,
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
        case GET_BUSINESS: return {...state, business: action.business}
        case GET_ALL_PRODUCTS: return { ...state, products: action.products}

        default: return state
    }
}