import { Button, Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import './InsertEvent.css'

const InsertEvent = () => {

    const [eventInfo, setEventInfo] = useState({
        name: '',
        date:'',
        description:'',
        image:'',
    });

    const handleBlur = (e) => {
        let isFieldValid = true;

        if (isFieldValid) {
            const newEventInfo = { ...eventInfo };
            newEventInfo[e.target.name] = e.target.value;
            setEventInfo(newEventInfo);           
        }
    }
    const handleSubmit = (e) => {
  
        fetch('https://polar-spire-08660.herokuapp.com/addJobCategory',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(eventInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        e.preventDefault();
    }


    return (
        <Container>
        <form   autoComplete="off" id='insert-event-form' onSubmit={handleSubmit}>
            <Grid></Grid>
            <h5>Event Title:</h5>
            <input type="text" name="name" placeholder = 'Event Name' id="" onBlur={handleBlur} required/>
            <h5>Event Date:</h5>
            <input type="date" name="date" placeholder = 'Event date' id="" onBlur={handleBlur} required/>
            <h5>Description:</h5>
            <input type="description" name="description" placeholder = 'description' id="" onBlur={handleBlur} required/>
            <h5>Event Image:</h5>
            <input type="url" name="image" placeholder = 'Insert Image URL' id="" onBlur={handleBlur} required/>
            <br/>
            <br/>
            <Button id='submit-btn' type="submit" variant="contained" color="primary"> Submit</Button>
        </form>
        </Container>
    );
};

export default InsertEvent;