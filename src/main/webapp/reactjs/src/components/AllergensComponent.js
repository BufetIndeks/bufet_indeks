import React, {Component} from 'react'
import axios from 'axios';
import M from "materialize-css";
import {API_URL} from "../ApiUrl";

class AllergensComponent extends Component {

    constructor(props) {
        super(props)

        this.state={
            newAllergenName: '',
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
        M.AutoInit()
        this.getAllergens()
    }

    getAllergens()
    {
        axios.get(API_URL + "/admin/allergen",{withCredentials:true})
            .then(response => {
                this.setState({
                    allergens:response.data})
            })
    }

    add()
    {
        console.log(this.state.newAllergenName)
        axios.post(API_URL + "/admin/addAllergen", {
            allergenName: this.state.newAllergenName
        })
            .then((response) => {
                console.log(this.state.allergens)
                /*let newAllergen = {
                    id: 0,
                    allergenName: this.state.newAllergenName
                }
                this.setState({allergens: {...this.state.allergens, newAllergen}})*/
                this.getAllergens()
                this.forceUpdate()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    remove(name) {
        console.log(name);
        axios.post(API_URL + "/admin/deleteAllergen", {
            allergenName: name
        })
            .then((response) => {
                console.log(response)
                this.getAllergens()
                this.forceUpdate()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
                <div>
                    <div>
                    <input className="validate" type="text" id="newAllergenName" name="newAllergenName"
                             value={this.state.newAllergenName} onChange={this.handleChange}/>
                    </div>
                    <button className="btn green waves-effect waves-light"
                            onClick={() => this.add()}>Dodaj
                    </button>


                    <tbody>
                    {
                        this.state.allergens.map((allergen,i)=>{
                            return (
                                <tr>
                                    <th>{allergen.allergenName}</th>
                                    <th>
                                        <div>
                                        <button className="btn blue waves-effect waves-light"
                                                onClick={() => this.edit(allergen.allergenName)}>Edytuj
                                        </button>
                                        </div>
                                    </th>
                                    <th>
                                    <div>
                                        <button className="btn red waves-effect waves-light"
                                            onClick={() => this.remove(allergen.allergenName)}>Usuń</button>
                                    </div>
                                    </th>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </div>
        )
    }
}

export default AllergensComponent