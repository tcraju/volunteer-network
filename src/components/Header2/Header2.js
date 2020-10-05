import { AppBar, Button, Container, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

const Header2 = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    const classes = useStyles();
    const {jobId } = useParams();
    return (
        <Container>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={() => history.push('/')}>
                <img src="https://iili.io/2WPW5G.png" alt=""/>
                </IconButton>
                <Typography variant="h6" className={classes.title}></Typography>
                <Button onClick={() => history.push('/blog')}> Blog </Button>
                <Button onClick={() => history.push('/home')}> Home </Button>
                <Button onClick={() => history.push('/donation')}> Donation </Button>                
                <Button onClick={() => history.push('/blog')}> Blog </Button>
                <Button onClick={() => history.push('/taskDetail')}> Appointment </Button>
                <Button id='admin-btn' onClick={() => history.push('/admin')}>{loggedInUser.name}</Button>
            </Toolbar>
        </AppBar>
        </Container>
    );
};

export default Header2;