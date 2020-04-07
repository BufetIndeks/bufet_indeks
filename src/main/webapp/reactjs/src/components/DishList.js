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
    axios.get("http://bufetindeks.duckdns.org:2023/menu/dishes")
        .then(response => {
            this.setState({
                dishes:response})
            console.log(this.state);
        })

}

    render() {
    return(
        <ul>
            {
                this.state.dishes.map((dish)=>{
                    console.log(dish);
                    return (<li>(dish.dishName)</li>)
                })
            }
        </ul>
    );}



}