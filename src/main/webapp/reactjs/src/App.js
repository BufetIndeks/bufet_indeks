import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

//import DishList from './components/DishList';
import DishList from './list/DishList';
import CategoryList from './list/CategoryList';
import IngredientList from './list/IngredientList';
import AllergenList from './list/AllergenList';
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
import Cart from './components/Cart';
import Payment from './components/Payment';

import { Container } from '@material-ui/core';
import ListTemplate from './templates/ListTemplate';

import GlobalState from './context/GlobalState'

import axios from 'axios'
import {API_URL} from './ApiUrl.js'
import WorkerDashboard from './components/WorkerDashboard';

const App = props => {

    const [role, setRole] = useState('ROLE_GUEST')

    const checkRole = () => {
        axios.get(API_URL + '/takeRole')
            .then(res => {
                if(res.data.authorities !== undefined)
                    setRole(res.data.authorities[0].authority)
                else{
                    setRole('ROLE_GUEST');
                }
            })
            .catch(err => {
                console.error(err)
            })
        return role
    }
    
    useEffect( () => {
        checkRole()
    }, [role])

    useEffect( () => {
        checkRole()
    }, [])

    return(
        <GlobalState>
            <Router>
                <MenuComponent role={checkRole()}/>
                <Container component="main" style={{marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center"}} maxWidth="md">
                    <Switch>
                        
                        <Route exact path="/">
                            {role === 'ROLE_ADMIN' && <AdminDashboard />}
                            {role === 'ROLE_TABLE' && <HomeComponent />}
                            {role === 'ROLE_WORKER' && <WorkerDashboard />}
                            {role === 'ROLE_GUEST' && <LoginComponent />} }
                        </Route>
                        
                        <Route exact path="/login" >
                            <LoginComponent setRole={setRole} />
                        </Route>
                        
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/cart/pay" component={Payment} />
                        

                        <Route exact path='/menu/:dishId'>
                            <DishShowTemplate />
                        </Route>

                        <Route role={role} url='/adminLogged' exact path="/logout">
                            <LogoutComponent setRole={setRole} />
                        </Route>
                    
                        <AuthenticatedRoute role={role} url='/adminLogged' exact path="/allergen" component={AllergensComponent} />
                        
                        <AuthenticatedRoute role={'ROLE_ADMIN'} url='/adminLogged' exact path="/admin/register" component={RegisterComponent} />
                        
                        <AuthenticatedRoute role={'ROLE_ADMIN'} url='/adminLogged' exact path="/admin/dashboard" component={AdminDashboard} />
                        
                        <AuthenticatedRoute role={role} url='/adminLogged' exact path="/admin/dishes" component={DishList} />
                        
                        <AuthenticatedRoute role={'ROLE_ADMIN'} url='/adminLogged' exact path="/admin/dishes/:id" component={DishEditTemplate} />
                        
                        <AuthenticatedRoute exact path="/admin/ingredients" role={role} url='/adminLogged' component={IngredientList} />
                            {/* <ListTemplate url={'/admin/ingredient'} headers={['Składnik', 'Alergeny']}/> */}

                        <AuthenticatedRoute exact path="/admin/categories" role={role} url='/adminLogged' component={CategoryList} />
                            {/* <ListTemplate url={'/category'} headers={['Kategoria']}/> */}

                        <AuthenticatedRoute exact path="/admin/allergens" role={role} url='/adminLogged' component={AllergenList} />
                            {/* <ListTemplate url={'/admin/allergen'} headers={['Alergen']}/> */}
                        
                        <Route exact path="/regulations" component={Regulamin} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/menu">
                            <CardList getUrl="/category" itemUrl='/menu/'/>
                        </Route>
                        
                        <Route path="/*"><ErrorTemplate /></Route>
                    </Switch>
                </Container>
            </Router>
        </GlobalState>
    )
}


export default App