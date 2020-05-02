import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import PanToolIcon from '@material-ui/icons/PanTool'

const Dish = props => {

    let path = `/list/${props.key}`
    let mode = {...props}
    
    if(props.view === 'admin'){
        path = `/admin/dishes/${props.dish.id}`
        mode = {...props, editMode: true}
    }

    return(
        <Card>
            <Link to={{ pathname: path, state: mode}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.dish.dishName}
                        height="140"
                        image="https://images.freeimages.com/images/premium/previews/2871/28718848-spaghetti-with-pesto.jpg"
                        title={props.dish.dishName}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h6" align="center">
                            {props.dish.dishName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            {/* <CardActions>
                {props.view === 'admin' && <>
                    <Link to={{ pathname: `/admin/dishes/${props.dish.id}`, state: {...props, editMode: true}}} >
                        <IconButton aria-label="Modyfikuj"><EditIcon /></IconButton>
                        </Link>
                    <Link to={{ pathname: `/admin/dishes/${props.dish.id}`, state: {...props, deleteMode: true}}}>
                        <IconButton aria-label="Usuń"><DeleteIcon /></IconButton>
                    </Link>
                </>}
                {props.view === 'client' && 
                    <Link to={{ pathname: `/list/${props.key}`, state: {...props}}}>
                        <IconButton aria-label="Zamów"><PanToolIcon /></IconButton>
                    </Link>}
            </CardActions> */}
        </Card>
    )

    // return(
    //     <div className="card hoverable">
            
    //         <div className="card-image">
    //             <img src="https://images.freeimages.com/images/premium/previews/2871/28718848-spaghetti-with-pesto.jpg" alt="Obrazek dania"/>
    //             {props.view === 'admin' &&
    //             <React.Fragment>
    //                 <Link to={{ pathname: `/admin/dishes/${props.dish.id}`, state: {...props, editMode: true}}} className="btn-floating halfway-fab waves-effect waves-light blue left"><i className="material-icons">edit</i></Link>
    //                 <Link to={{ pathname: `/admin/dishes/${props.dish.id}`, state: {...props, deleteMode: true}}} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">delete</i></Link>
    //             </React.Fragment>
    //             }
    //             {props.view === 'client' && <Link to={{ pathname: `/list/${props.key}`, state: {...props}}} className="btn-floating halfway-fab waves-effect waves-light blue green"><i className="material-icons">pan_tool</i></Link>}
    //         </div>
    //         <div className="card-content row">
    //             <b><p className="col s12 center">{props.dish.dishName}</p></b>
    //         </div>
    //     </div>
    // )

}

export default Dish;