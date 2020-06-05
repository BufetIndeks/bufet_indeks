import React from 'react';

export default React.createContext({
    order: [],
    login: '',
    role: '',
    addDishToOrder: dish => {},
    removeDishFromOrder: dishId => {},
    removeOrder: () => {},
    setLogin: login => {},
    setRole: role => {}
})