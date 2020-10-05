import { Button, Grid } from '@material-ui/core';
import React from 'react';
import './UnitTaskDetail.css'

const UnitTaskDetail = (props) => {
    const { _id, taskImage, desiredDate, workType } = props.singleJob

    const deleteHandler = (id) => {
        fetch(`http://localhost:5000/deleteItem/${id}`, {
            method :'DELETE'
        })
        .then(res => res.json())
        .then (result => {
            console.log('deleted successfully')
        })
        
    }


    return (
        <div className='single-task-area'>
        <Grid container spacing={4}>

            <Grid  item xs={3}>
                <img className='task-image' src={taskImage} alt="" />
            </Grid>
            <Grid item xs={1}> 
                
            </Grid>
            <Grid item xs={5} >
                <h4 ml={5}>{workType}</h4>
                <h5 ml={5}>{desiredDate.slice(0,10)}</h5>
            </Grid>
            <Grid item xs={3}>
                <Button className='cancel-btn' onClick={() => deleteHandler(_id)}>Cancel</Button>
            </Grid>

        </Grid>
        </div>
    );
};

export default UnitTaskDetail;