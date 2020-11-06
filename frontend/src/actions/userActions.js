import { 
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT
} from '../constants/userConstants'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {

    const { data } = await axios.get(`/api/products/${id}`)

    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        const 

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/users/login', { email, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
        
    }

  
     
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}

export const removeFromCart = (id) => (dispatch, getState) =>{
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}

