import React, {Component} from 'react';
import Dish from '../templates/Dish';
import '../App.css'
import axios from 'axios';
import AuthenticationService from "../service/AuthenticationService";
import {API_URL} from "../ApiUrl";

class DishList extends Component{

    constructor(props){
        super(props);


        let view = false;
        if(this.props.location !== undefined && this.props.location.state !== undefined) {
            view = this.props.location.state.view;
        }

        this.state={
            dishes: [],
            view: view
        };
    }

    componentDidMount(){
        this.getDishes();
    }

    getDishes()
    {
        axios.get(API_URL + "/menu/dishes")
            .then(response => {
                this.setState({
                    dishes:response.data})
            })
    }

    render() {
        return(
            <ul className="col s12">
                {this.state.dishes.map( (dish, index) => {
                    return(<li key={index} className="col s4"><Dish dish={dish} view={this.state.view} key={index} /></li>)
                })}
            </ul>
        );
}
                }


export default DishList;