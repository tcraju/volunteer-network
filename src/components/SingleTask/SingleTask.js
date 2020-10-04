import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './SingleTask.css'
import { Link } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        maxWidth: 340,
        height: 380
    }
});



const SingleTask = (props) => {
    const { id, name, image } = props.task
    const history = useHistory()
    
    const classes = useStyles();
    // console.log(id, name, image);
    return (


        <Link onClick={() => { history.push(`/registration/${id}`) }}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={image}
                    title={name}
                    
                /> 
                <CardContent>
                    <Typography >
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
        

    );
};

export default SingleTask;