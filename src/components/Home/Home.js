import React, { useState, useEffect } from 'react';
import { Container, Grid } from "@material-ui/core";
import SingleTask from '../SingleTask/SingleTask';
// import fakeData from '../../fakeData'
// import Header from '../Header/Header';


const Home = () => {
    const [task, setTask] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:5000/jobCategory')
        .then( response => response.json())
        .then(data => setTask(data))
        console.log(task);
    },[]);


    return (
        <>
        <Container>
          <br/>
          <br/>
        <Grid container spacing={2}>
          {task.map((tsk) => (
            <Grid key={tsk.id} item  md={3} >
              <SingleTask task={tsk}  />
            </Grid>
          ))}

        </Grid>
      </Container>
      </>
    );
};

export default Home;