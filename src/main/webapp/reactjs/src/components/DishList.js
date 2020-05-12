import React, {Component} from 'react';
import Dish from '../templates/Dish';
import axios from 'axios';
import {API_URL} from "../ApiUrl";

import {Container, Grid} from '@material-ui/core'

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
        axios.get(API_URL + "/menu")
            .then(response => {
                console.log(response.data)
                this.setState({
                    dishes:response.data})
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        return(
            <Container maxWidth="md" style={{marginTop: "10px"}}>
                <Grid container spacing={4}>
                {this.state.dishes.map( (dish, index) => {
                     return(<Grid key={dish.dishName} item xs={4}>
                                <Dish dish={dish} view={this.state.view} />
                            </Grid>)
                })}
                </Grid>
            </Container>
        );
}
                }


export default DishList;