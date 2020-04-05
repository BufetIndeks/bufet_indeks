import React from 'react';
import './App.css';
import BookList from './components/DishList';
import { Router, Route } from 'react-router';

export default function App() {

    const heading = "Welcome to Book Shop";
    const quote = "Good friends, good books, and a sleepy conscience: this is the ideal life.";
    const footer = "Mark Twain";

    return (
<div>
    <Route path="/list" exact component={BookList}/>
</div>


    );
}