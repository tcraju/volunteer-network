import React, { useState, useEffect } from 'react';
import { Container, Grid } from "@material-ui/core";
import SingleTask from '../SingleTask/SingleTask';
import fakeData from '../../fakeData'


const Home = () => {
    const [task, setTask] = useState(fakeData);
 
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then( response => response.json())
    //     .then(data => setPosts(data))
    // },[]);


    return (
        
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
    );
};

export default Home;