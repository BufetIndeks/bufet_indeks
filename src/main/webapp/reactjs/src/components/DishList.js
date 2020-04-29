import React, {Component} from 'react';
import Dish from '../templates/Dish';
import '../App.css'
import axios from 'axios';
import AuthenticationService from "../service/AuthenticationService";
import {API_URL} from "../ApiUrl";

class DishList extends Component{

    constructor(props){
        super(props);


        let editable = false;
        if(this.props.location !== undefined && this.props.location.state !== undefined) {
            editable = this.props.location.state.editable;
        }

        this.state={
            dishes: [],
            editable: editable
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
                    return(<li key={index} className="col s4"><Dish dish={dish} editable={this.state.editable} /></li>)
                })}
            </ul>
        );
}
                }


export default DishList;