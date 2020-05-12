import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button} from '@material-ui/core';

const Dish = props => {

    let path = `/list/${props.dish.id}`
    let mode = {...props}
    
    if(props.view === 'admin'){
        path = `/admin/dishes/${props.dish.id}`
        mode = {...props, editMode: true}
    }

    return(
        <Card>
                <CardActionArea>
                <Link to={{ pathname: path, state: mode}}>

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
                    </Link>
                </CardActionArea>
                {props.view === 'admin' &&
                    <CardActions>
                        <Button variant="contained" color="secondary"><Link to={{pathname: path, state: {...props, deleteMode: true}}}>Delete</Link></Button>
                    </CardActions>
                }
        </Card>
    )
}

export default Dish;