export const ADD_DISH = "ADD_DISH";
export const REMOVE_DISH = "REMOVE_DISH";

const addDishToOrder = (dish, state) => {
    const updatedOrder = [...state.order];
    const updatedItemIndex = updatedOrder.findIndex(item => item.id === dish.id);
    console.log(dish, "DISH")
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
    console.log('Removing product with id: ' + dishId);
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

export const orderReducer = (state, action) => {
    switch(action.type){
        case ADD_DISH:
            return addDishToOrder(action.payload, state);
        case REMOVE_DISH:
            return removeDishFromOrder(action.payload, state);
        default:
            return state;        
    }
}