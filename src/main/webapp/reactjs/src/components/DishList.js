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
        .then(response => console.log(response.data))

}

    render() {
    return(

        'Tu bedzie lista dań'
    );}



}