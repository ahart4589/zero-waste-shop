import axios from 'axios'

let initialState = {
  productList: [],
  product: null,
  cart: [],
  data: null,
  user: null,
  orderId: null
}

const FULFILLED = '_FULFILLED'
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const CHECKOUT = 'CHECKOUT'
const EMPTY_CART = 'EMPTY_CART'

// Authentication
const GET_USER = 'GET_USER'
const LOGOUT_USER = 'LOGOUT_USER'


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_PRODUCTS + FULFILLED:
        return {...state, productList: action.payload}
    case GET_PRODUCT + FULFILLED:
        return {...state, product: action.payload}
    case GET_CART + FULFILLED:
        return {...state, cart: action.payload}
    case ADD_TO_CART + FULFILLED:
        return {...state, cart: action.payload}
    case UPDATE_QUANTITY + FULFILLED:
        return {...state, cart: action.payload}
    case DELETE_FROM_CART + FULFILLED:
        return {...state, cart: action.payload}
    case CHECKOUT + FULFILLED:
        return {...state, cart: action.payload}
    case EMPTY_CART:
        return { ...state, cart: [], orderId: action.payload }
  
    // Authentication
    case GET_USER + FULFILLED:
        return {...state, user: action.payload.data}
    case LOGOUT_USER + FULFILLED:
        return {...state, user: null, cart: []}

    default:
    return state

  }
}


export function getProducts(){
  let productList = axios.get('/api/products').then(results => {
    return results.data
  })
  return {
    type: GET_PRODUCTS,
    payload: productList
  }
}

export function getProduct(id){
  let product = axios.get(`/api/products/${id}`).then(results => {
    return results.data[0]
  })
  return {
    type: GET_PRODUCT,
    payload: product
  }
}

export function getCart(){
  let cart = axios.get('/api/cart').then(results => {
    return results.data
  })
  return {
    type: GET_CART,
    payload: cart
  }
}

export function addToCart(id){
  let cart = axios.post(`/api/cart/${id}`).then(results => {
    return results.data
  })
  return {
    type: ADD_TO_CART,
    payload: cart
  }
}

export function updateQuantity(id, quantity, update){
  let cart = axios.put(`/api/cart/${id}?quantity=${quantity}&update=${update}`).then(results => {
    return results.data
  })
  return {
    type: UPDATE_QUANTITY,
    payload: cart
  }
}

export function deleteFromCart(id){
  let cart = axios.delete(`/api/cart/${id}`).then(results => {
    return results.data
  })
  return {
    type: DELETE_FROM_CART,
    payload: cart
  }
}

export function emptyCart(orderId){
  return {
    type: EMPTY_CART,
    payload: orderId
  }
}

// Authentication
export function getUser(){
  return {
    type: GET_USER,
    payload: axios.get('api/currentUser')
  }
}

export function logout(){
  return{
    type: LOGOUT_USER,
    payload: axios.get('/api/logout')
  }
}

