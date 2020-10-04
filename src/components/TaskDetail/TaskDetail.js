import { Container, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import UnitTaskDetail from '../UnitTaskDetail/UnitTaskDetail';
import './TaskDetail.css'

const TaskDetail = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [registeredTask, setRegisteredTask] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/registeredJob')
            .then(response => response.json())
            .then(data => setRegisteredTask(data))
        console.log(registeredTask);
    }, []);

    let individualTask = registeredTask.filter(x => x.email == loggedInUser.email)
    console.log(loggedInUser.mail);
    console.log(individualTask);



    return (
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

    );
};

export default TaskDetail;