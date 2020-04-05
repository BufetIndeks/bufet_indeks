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
        .then(response => console.log(response.data))
     //   .then((data) => {
     //       this.setState({dishes: data});
   //     });
}



}