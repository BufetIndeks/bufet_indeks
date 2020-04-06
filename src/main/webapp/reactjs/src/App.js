import React from 'react';
import './App.css';
import DishList from './components/DishList';
import LoginComponent from './components/LoginComponent';
import MenuComponent from './components/MenuComponent';
import LogoutComponent from './components/LogoutComponent';
import AuthenticatedRoute from './components/AuthenticatedRoute';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
return(

            <Router>
                    <MenuComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                        <Route path="/list" exact component={DishList} />
                    </Switch>
            </Router>
    )


}
