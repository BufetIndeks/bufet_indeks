import React from 'react';
import './App.css';
import DishList from './components/DishList';
import LoginComponent from './components/LoginComponent';
import MenuComponent from './components/MenuComponent';
import LogoutComponent from './components/LogoutComponent';
import RegisterComponent from './components/RegisterComponent';
import AllergensComponent from './components/AllergensComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeComponent from "./components/HomeComponent";
import 'materialize-css/dist/css/materialize.min.css';
import AuthenticatedRoute from "./components/AuthenticatedRoute";




export default function App() {
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
                    </Switch>
            </Router>
    )
}
