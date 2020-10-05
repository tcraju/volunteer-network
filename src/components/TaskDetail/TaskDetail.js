import { Container, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header2 from '../Header2/Header2';
import UnitTaskDetail from '../UnitTaskDetail/UnitTaskDetail';
import './TaskDetail.css'

const TaskDetail = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [registeredTask, setRegisteredTask] = useState([]);

    useEffect(() => {
        fetch('https://polar-spire-08660.herokuapp.com/registeredJob')
            .then(response => response.json())
            .then(data => setRegisteredTask(data))
        console.log(registeredTask);
    }, []);

    let individualTask = registeredTask.filter(x => x.email == loggedInUser.email)
    console.log(loggedInUser.mail);
    console.log(individualTask);



    return (
        <>
        <Header2></Header2>
        <br/>
        <br/>
        <div className='detail-task-area'>
        <Container >
        <Grid container spacing={5}>
            {individualTask.map((job) => (
                <Grid key={job.taskId} item md={6} >
                    <UnitTaskDetail singleJob={job} />
                </Grid>
            ))}

        </Grid>
        </Container>
        </div>
        </>

    );
};

export default TaskDetail;