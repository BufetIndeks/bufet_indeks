import React from 'react';
import './App.css';
import BookList from './components/DishList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
return(
    <Router>
     <Route path="/list" exact component={BookList}/>
    </Router>

    );
}