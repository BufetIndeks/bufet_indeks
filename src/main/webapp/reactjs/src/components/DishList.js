import React, {Component} from 'react';
import '../App.css'
import axios from 'axios';

export default class DishList extends Component{

constructor(props){
    super(props);
    this.state={
        dishes:[]
    };
}

componentDidMount(){

    this.getDishes();
}

getDishes()
{
    axios.get("http://localhost:8080/menu/dishes")
        .then(response => {
            console.log(sessionStorage.getItem("role"));
            this.setState({
                dishes:response.data})
        })
}

    render() {
    return(
        <ul>
            {
                this.state.dishes.map((dish,i)=>{
                    return (<li >{dish.dishName}</li>)
                })
            }
        </ul>
    );}



}