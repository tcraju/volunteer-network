import React, { useState, useEffect } from 'react';
import { Container, Grid } from "@material-ui/core";
import SingleTask from '../SingleTask/SingleTask';
import Header from '../Header/Header';
// import fakeData from '../../fakeData'
// import Header from '../Header/Header';


const Home = () => {
    const [task, setTask] = useState([]);
 
    useEffect(() => {
     
        fetch('https://polar-spire-08660.herokuapp.com/jobCategory')
        .then( response => response.json())
        .then(data => setTask(data))
    },[]);


    return (
        <>
        <Header></Header>
        <Container>
          <br/>
          <br/>
        <Grid container spacing={2}>
          {task.map((tsk) => (
            <Grid key={tsk._id} item  md={3} >
              <SingleTask task={tsk}  />
            </Grid>
          ))}

        </Grid>
      </Container>
      </>
    );
};

export default Home;