import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import 'materialize-css/dist/css/materialize.min.css';

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
import ErrorTemplate from "./templates/ErrorTemplate"
import DishShowTemplate from './templates/DishShowTemplate';
import Regulamin from "./components/Regulamin";
import About from "./components/About";

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ListTemplate from './templates/ListTemplate';
import { API_URL } from './ApiUrl';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}))


export default function App() {

    const [role, setRole] = useState('ROLE_ADMIN');
    const [url, setUrl] = useState('/adminLogged')

    const classes = useStyles()

    return(
        <Router>
            <MenuComponent role={role}/>
            <Container component="main" className={classes.root} maxWidth="md">
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/login" component={LoginComponent} />
                    <AuthenticatedRoute role={role} url={url} exact path="/logout" component={LogoutComponent} />
                    <Route path="/list" exact component={DishList} />
                    <Route path="/list/:d" exact component={DishShowTemplate} />
                    <Route role={role} url={url} exact path="/allergen" component={AllergensComponent} />
                    <Route role={role} url={url} exact path="/admin/register" component={RegisterComponent} />
                    <Route role={role} url={url} exact path="/admin/dashboard" component={AdminDashboard} />
                    <Route role={role} url={url} exact path="/admin/dishes" component={DishList} />
                    <Route role={role} url={url} exact path="/admin/dishes/:id" component={DishEditTemplate} />
                    
                    <Route exact path="/admin/ingredients" role={role} url={url}>
                        <ListTemplate url={'/admin/ingredient'} headers={['Składnik', 'Alergeny']}/>
                    </Route>
                    <Route exact path="/admin/categories" role={role} url={url}>
                        <ListTemplate url={'/category'} headers={['Kategoria']}/>
                    </Route>
                    <Route exact path="/regulamin" component={Regulamin} />
                    <Route exact path="/about" component={About} />
                    <Route path="/*"><ErrorTemplate /></Route>
                </Switch>
            </Container>
        </Router>
    )
}
