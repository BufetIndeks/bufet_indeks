export const ADD_DISH = "ADD_DISH";
export const REMOVE_DISH = "REMOVE_DISH";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const SET_LOGIN = "SET_LOGIN";
export const SET_ROLE = "SET_ROLE";

const addDishToOrder = (dish, state) => {
    const updatedOrder = [...state.order];
    const updatedItemIndex = updatedOrder.findIndex(item => item.id === dish.id);

    if(updatedItemIndex < 0){
        updatedOrder.push({...dish, quantity: 1});
    }
    else{
        const updatedItem = {
            ...updatedOrder[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedOrder[updatedItemIndex] = updatedItem;
    }
    return {...state, order: updatedOrder};
}

const removeDishFromOrder = (dishId, state) => {
    const updatedOrder = [...state.order];
    const updatedItemIndex = updatedOrder.findIndex(item => item.id === dishId);
  
    const updatedItem = {
      ...updatedOrder[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedOrder.splice(updatedItemIndex, 1);
    } else {
      updatedOrder[updatedItemIndex] = updatedItem;
    }
    return { ...state, order: updatedOrder };
};

const removeOrder = (state) => {
    return {...state, order: {}};
}

const setLogin = (login, state) => {
    return {...state, login: login};
}

const setRole = (role, state) => {
    console.log('setRole', role)
    return {...state, role: role};
}

export const Reducer = (state, action) => {
    switch(action.type){
        case ADD_DISH:
            return addDishToOrder(action.payload, state);
        case REMOVE_DISH:
            return removeDishFromOrder(action.payload, state);
        case REMOVE_ORDER:
            return removeOrder(state);
        case SET_LOGIN:
            return setLogin(action.payload, state);
        case SET_ROLE:
            return setRole(action.payload, state);
        default:
            return state;        
    }
}