import React, { Component } from 'react';
import M from "materialize-css";
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class DishShowTemplate extends Component{
    constructor(props){
        super(props)
        
        let dish = {};

        if(this.props.location !== undefined && this.props.location.state !== undefined) {
            dish = this.props.location.state.dish;
        }

        this.state = {
            dishImage: dish.dishImage ? dish.dishImage : '',
            dishName: dish.dishName ? dish.dishName : '',
            dishDescription: dish.dishDescription ? dish.dishDescription : '',
            dishPrice: dish.dishPrice ? dish.dishPrice : '',
            dishIngredients: dish.dishIngredients ? dish.dishIngredients : '',
            dishCategory: dish.dishCategory ? dish.dishCategory : '',
            dishOfTheDay: dish.dishOfTheDay ? dish.dishOfTheDay : false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = () => {
        console.log("SUBMIT")
    }

    render(){
        return(
            <>
                <div className="card col s10 offset-s1">
                    <div className="card-image">
                        <img src={this.state.dishImage} />
                    </div>
                </div>

                <div className="col s12">
                    {this.state.dishName}
                </div>

                <div className="col s12">
                    {this.state.dishDescription}
                </div>

                <div className="col s12">
                    {this.state.ingredients}
                </div>

                <div className="col s12">
                    {this.state.dishPrice}
                </div>

                <div className="col s12">
                    {this.state.dishCategory}
                </div>

                <div className="col s12">
                    {this.state.dishOfTheDay && <p>Danie dnia</p>}
                </div>

                <div className="col s12">
                    <button className="btn btn-block blue">Zamów</button>
                </div>
            </>
        )
    }
}

export default DishShowTemplate;