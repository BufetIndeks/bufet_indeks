import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

import DishList from './components/DishList';
import LoginComponent from './components/LoginComponent';
import MenuComponent from './components/MenuComponent';
import LogoutComponent from './components/LogoutComponent';
import RegisterComponent from './components/RegisterComponent';
import AllergensComponent from './components/AllergensComponent';
import HomeComponent from "./components/HomeComponent";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import DishEditTemplate from "./templates/DishEditTemplate";
import AdminDashboard from "./components/AdminDashboard";
import Regulamin from "./components/Regulamin";
import About from "./components/About";
export default function App() {

    const [role, setRole] = useState('ROLE_ADMIN');
    const [url, setUrl] = useState('/adminLogged')

    return(
        <Router>
            <MenuComponent />
            <div className="row container">
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/login" component={LoginComponent} />
                <AuthenticatedRoute role={role} url={url} exact path="/logout" component={LogoutComponent} />
                <Route path="/list" exact component={DishList} />
                <AuthenticatedRoute role={role} url={url} exact path="/allergen" component={AllergensComponent} />
                <AuthenticatedRoute role={role} url={url} exact path="/admin/register" component={RegisterComponent} />
                <AuthenticatedRoute role={role} url={url} exact path="/admin/dashboard" component={AdminDashboard} />
                <AuthenticatedRoute role={role} url={url} exact path="/admin/dishes" component={DishList} />
                <AuthenticatedRoute role={role} url={url} exact path="/admin/dishes/:id" component={DishEditTemplate} />
                <Route exact path="/regulamin" component={Regulamin} />
                <Route exact path="/about" component={About} />
            </Switch>
            </div>
        </Router>
    )
}
