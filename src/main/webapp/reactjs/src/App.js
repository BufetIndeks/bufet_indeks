import React, { Component } from 'react';
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
import CardList from './components/CardList'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ListTemplate from './templates/ListTemplate';
import axios from 'axios';
import { API_URL } from './ApiUrl';

const useStyles = makeStyles((theme) => ({
    root: {
        
    }
}))

class App extends Component {
    constructor(){
        super()
        this.state = {role: 'ROLE_GUEST', file: []}
    }

    setRole = (role) => {
        this.setState({role: role})
    }

    files = event => {
        let a = event.target.files[0]
        this.setState({file: a})
    }

    render = () => {

        return(
            <Router>
                <MenuComponent role={this.state.role}/>
                <Container component="main" style={{marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center"}} maxWidth="md">
                    <Switch>
                        <Route exact path="/" component={HomeComponent} />
                        
                        <Route exact path="/login" >
                            <LoginComponent setRole={this.setRole} />
                        </Route>
                        
                        <Route role={this.state.role} url='/adminLogged' exact path="/logout">
                            <LogoutComponent setRole={this.setRole} />
                        </Route>
                        {/* <Route path="/list" exact component={DishList} />
                        <Route path="/list/:id" exact component={DishShowTemplate} /> */}
                    
                    <AuthenticatedRoute role={this.state.role} url='/adminLogged' exact path="/allergen" component={AllergensComponent} />
                        
                        <AuthenticatedRoute role={'ROLE_ADMIN'} url='/adminLogged' exact path="/admin/register" component={RegisterComponent} />
                        
                        <AuthenticatedRoute role={'ROLE_ADMIN'} url='/adminLogged' exact path="/admin/dashboard" component={AdminDashboard} />
                        
                        <AuthenticatedRoute role={this.state.role} url='/adminLogged' exact path="/admin/dishes" component={DishList} />
                        
                        <AuthenticatedRoute role={'ROLE_ADMIN'} url='/adminLogged' exact path="/admin/dishes/:id" component={DishEditTemplate} />
                        
                        <Route exact path="/admin/ingredients" role={this.state.role} url='/adminLogged' >
                            <ListTemplate url={'/admin/ingredient'} headers={['Składnik', 'Alergeny']}/>
                        </Route>

                        <Route exact path="/admin/categories" role={this.state.role} url='/adminLogged' >
                            <ListTemplate url={'/category'} headers={['Kategoria']}/>
                        </Route>

                        <Route exact path="/admin/allergens" role={this.state.role} url='/adminLogged' >
                            <ListTemplate url={'/admin/allergen'} headers={['Alergen']}/>
                        </Route>
                        
                        <Route exact path="/regulamin" component={Regulamin} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/menu">
                            <CardList getUrl="/category" itemUrl='/menu/'/>
                        </Route>

                        <Route exact path='/menu/:dishId'>
                            <DishShowTemplate />
                        </Route>
                        
                        <Route path="/*"><ErrorTemplate /></Route>
                    </Switch>
                </Container>
            </Router>
        )}
}


export default App