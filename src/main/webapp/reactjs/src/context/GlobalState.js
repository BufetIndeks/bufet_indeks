import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../ApiUrl';

import GlobalContext from './GlobalContext'
import {Reducer, ADD_DISH, REMOVE_DISH, REMOVE_ORDER, SET_LOGIN, SET_ROLE} from './Reducer'

const GlobalState = props => {
    
    useEffect(() => {
        getLogin();
    }, [])

    const getLogin = () => {
        axios.get(API_URL + '/takeRole')
        .then(response => {
            setLogin(response.data.name);
            setRole(response.data.authorities[0].authority);
            console.log("GETLOGIN", response.data.authorities[0].authority)
        })
        .catch(error => {
            console.error(error.response)
        })
    }

    const [state, dispatch] = useReducer(Reducer, {order: [], login: '', role: "ROLE_GUEST"})

    const addDishToOrder = dish => {
        dispatch({type: ADD_DISH, payload: dish})
    }

    const removeDishFromOrder = dishId => {
        dispatch({type: REMOVE_DISH, payload: dishId})
    }

    const removeOrder = () => {
        dispatch({type: REMOVE_ORDER})
    }

    const setLogin = login => {
        dispatch({type: SET_LOGIN, payload: login});
    }

    const setRole = role => {
        dispatch({type: SET_ROLE, payload: role});
    }

    return (
        <GlobalContext.Provider
            value={{
                order: state.order,
                login: state.login,
                role: state.role,
                addDishToOrder: addDishToOrder,
                removeDishFromOrder: removeDishFromOrder,
                removeOrder: removeOrder,
                setLogin: setLogin,
                getLogin: getLogin,
                setRole: setRole
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;