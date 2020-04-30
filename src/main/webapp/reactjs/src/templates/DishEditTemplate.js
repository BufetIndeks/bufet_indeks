import React, { Component } from 'react';
import M from "materialize-css";
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class DishEditTemplate extends Component{
    constructor(props) {
        super(props);

        let dish = {};
        let deleteMode = false;

        if(this.props.location !== undefined && this.props.location.state !== undefined) {
            dish = this.props.location.state.dish;
            deleteMode = this.props.location.state.deleteMode;
        }

        this.state = {
            dishImage: dish.dishImage ? dish.dishImage : '',
            dishName: dish.dishName ? dish.dishName : '',
            dishDescription: dish.dishDescription ? dish.dishDescription : '',
            dishPrice: dish.dishPrice ? dish.dishPrice : '',
            dishIngredients: dish.dishIngredients ? dish.dishIngredients : '',
            dishCategory: dish.dishCategory ? dish.dishCategory : '',
            dishOfTheDay: dish.dishOfTheDay ? dish.dishOfTheDay : false,
            dishCategories: ["ramen","woda","picie"],
            deleteMode: deleteMode ? true : false,
            ingredients : ["cola", "makaron"]
        }
    }

    componentDidMount() {
        M.AutoInit();
        M.updateTextFields()

        if(this.state.deleteMode === true){
            let inputs = document.getElementsByTagName("input");
            for(let i = 0; i < inputs.length - 1; i++)
                inputs[i].disabled = true
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
            <form action="#" onSubmit={this.handleSubmit} className="col s10 offset-s1 l6 offset-l3">

                <div className="card col s10 offset-s1">
                    <div className="card-image">
                        <img src="https://images.freeimages.com/images/premium/previews/2871/28718848-spaghetti-with-pesto.jpg" />
                    </div>
                </div>

                <div className="input-field col s12">
                    <input className="validate" id="dishImage" type="text" value={this.state.dishImage} onChange={this.handleChange} alt="Wybór obrazka"/>
                    <label htmlFor="dishImage">Obraz poglądowy</label>
                </div>

                <div className="input-field col s12">
                    <label htmlFor="dishName">Nazwa dania</label>
                    <input className="validate active" id="dishName" type="text" max="30" value={this.state.dishName} onChange={this.handleChange} />
                </div>

                <div className="input-field col s12">
                    <label htmlFor="dishDescription">Opis dania</label>
                    <textarea className="materialize-textarea" id="dishDescription" value={this.state.dishDescription} onChange={this.handleChange} />
                </div>

                <div className="col s12">
                        <Autocomplete
                            multiple
                            id="dishIngredients"
                            options={this.state.ingredients}
                            filterSelectedOptions
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Składniki"
                            />
                            )}
                        />
                </div>

                <div className="input-field col s12">
                    <label htmlFor="dishPrice">Cena dania</label>
                    <input data={this.state.ingredients} className="validate active" id="dishPrice" type="text" max="5" min="3" value={this.state.dishPrice} onChange={this.handleChange} />
                </div>

                <div className="input-field col s12">
                    <select id="dishCategory" value={this.state.dishCategory} onChange={this.handleChange} >
                        {this.state.dishCategories.map( (el, index) => <option key={el} value={el}>{el}</option>)}
                    </select>
                    <label htmlFor="dishCategory">Kategoria dania</label>
                </div>

                <label className="input-field col s12">
                    <input type="checkbox" className="filled-in"/>
                    <span>Danie dnia</span>
                </label>

                <div className="input-field col s12 ">
                    {!this.state.deleteMode && <input className="btn blue btn-large btn-block center-block" id="submit" type="submit" value="Zapisz" />}
                    {this.state.deleteMode && <input className="btn red btn-large btn-block center-block" id="submit" type="submit" value="Usuń" />}
                </div>

            </form>
        )
    }
}

export default DishEditTemplate;