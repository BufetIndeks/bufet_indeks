import React from 'react';
import './App.css';
import DishList from './components/DishList';
import LoginComponent from './components/LoginComponent';
import MenuComponent from './components/MenuComponent';
import LogoutComponent from './components/LogoutComponent';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import RegisterComponent from './components/RegisterComponent';
import AllergensComponent from './components/AllergensComponent';
import AuthenticationService from './service/AuthenticationService';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeComponent from "./components/HomeComponent";
import 'materialize-css/dist/css/materialize.min.css';

export default function App() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
return(

            <Router>
                    <MenuComponent />
                    <Switch>
                        <Route path="/" exact component={HomeComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                        <Route path="/list" exact component={DishList} />
                        <AuthenticatedRoute path="/allergens" exact component={AllergensComponent} />
                        <AuthenticatedRoute path="/admin/register" exact component={RegisterComponent} />
                        <AuthenticatedRoute path="/admin"/>
                    </Switch>
            </Router>
    )


}
