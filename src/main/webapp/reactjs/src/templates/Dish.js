import React from "react";
import { Link } from 'react-router-dom';

const Dish = props => {

    return(
        <div className="card hoverable">
            <div className="card-image">
                <img src="https://images.freeimages.com/images/premium/previews/2871/28718848-spaghetti-with-pesto.jpg" alt="Obrazek dania"/>
                {props.editable &&
                <React.Fragment>
                    <Link to={{ pathname: `/admin/dishes/${props.dish.id}`, state: {...props}}} className="btn-floating halfway-fab waves-effect waves-light blue left"><i className="material-icons">edit</i></Link>
                    <Link to={{ pathname: `/admin/dishes/${props.dish.id}`, state: {...props, deleteMode: true}}} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">delete</i></Link>
                </React.Fragment>
                }
            </div>
            <div className="card-content row">
                <b><p className="col s12 center">{props.dish.dishName}</p></b>
            </div>
        </div>
    )

}

export default Dish;