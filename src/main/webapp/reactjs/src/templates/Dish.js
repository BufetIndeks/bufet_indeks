import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button} from '@material-ui/core';

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
                {props.view === 'admin' &&
                    <CardActions>
                        <Link to={{pathname: path, state: {...props, deleteMode: true}}}><Button>Delete</Button></Link>
                    </CardActions>
                }
            </Link>
        </Card>
    )
}

export default Dish;