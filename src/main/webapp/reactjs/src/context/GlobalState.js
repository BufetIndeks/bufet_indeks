import React, { useReducer } from 'react';

import GlobalContext from './GlobalContext'
import {orderReducer, ADD_DISH, REMOVE_DISH} from './OrderReducer'

const GlobalState = props => {
    const [orderState, dispatch] = useReducer(orderReducer, {order: []})

    const addDishToOrder = dish => {
        dispatch({type: ADD_DISH, payload: dish})
    }

    const removeDishFromOrder = dishId => {
        dispatch({type: REMOVE_DISH, payload: dishId})
    }

    return (
        <GlobalContext.Provider
            value={{
                order: orderState.order,
                addDishToOrder: addDishToOrder,
                removeDishFromOrder: removeDishFromOrder
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState