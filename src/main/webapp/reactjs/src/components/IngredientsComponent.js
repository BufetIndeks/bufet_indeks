import React, {Component} from 'react'
import axios from 'axios';
import M from "materialize-css";
import {API_URL} from "../ApiUrl";

class IngredientsComponent extends Component {

    constructor(props) {
        super(props)

        this.state={
            allergens:[]
        };
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    submitClicked = () => {
    }

    componentDidMount() {
        axios.get(API_URL + "/admin/allergens")
            .then(response => {
                this.setState({
                    allergens:response.data})
            })
    }

    render() {
        return (
            <div className="row container">

                <ul>
                    {
                        this.state.allergens.map((allergen,i)=>{
                            return (<li>{allergen.allergenName}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default IngredientsComponent