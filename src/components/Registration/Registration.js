import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '60ch',
        },
    },
}));



const Registration = () => {
    const history = useHistory()
    const classes = useStyles();
    const {jobId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [task, setTask] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:5000/jobCategory')
        .then( response => response.json())
        .then(data => setTask(data))
       
    },[jobId]);

    let selectedTask = task.filter(x => x._id == jobId)

 
    const [volunteerInfo, setVolunteerInfo] = useState({
        taskId: jobId,
        description:''
        // workType: task.length && selectedTask[0].name,
        // taskImage: task.length && selectedTask[0].image
    });




    const handleBlur = (e) => {
        let isFieldValid = true;

        if (isFieldValid) {
            const newVolunteerInfo = { ...volunteerInfo };
            newVolunteerInfo[e.target.name] = e.target.value;
            setVolunteerInfo(newVolunteerInfo);           
        }
    }



    const [selectedDate, setSelectedDate] = useState({
        desiredDate: new Date(),
    });

    const handleSelectDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.desiredDate = date;
        setSelectedDate(newDates);
    };

    const handleSubmit = (e) => {
        let taskName = selectedTask[0].name
        let taskImg = selectedTask[0].image
        const additionalTaskInfo = {workType: taskName, taskImage: taskImg}

        
        const detailInfoForTask = {...loggedInUser, ...volunteerInfo, ...selectedDate, ...additionalTaskInfo}
        
    
        fetch('http://localhost:5000/addTask',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(detailInfoForTask)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        history.push('/taskDetail')
        e.preventDefault();
    }





    return (
        <form className={classes.root}  autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="standard-basic"  label="Full Name" value={loggedInUser.name } />
            <br />
            <TextField id="standard-basic"  label="Username or Email" value={loggedInUser.email} />
            <br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Choose a date"
                        value={selectedDate.desiredDate}
                        onChange={handleSelectDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
            </MuiPickersUtilsProvider>
            <br />
            <TextField id="job-descripton" name='description' label="Description" onBlur={handleBlur} required/>
            <br />
            <TextField id="job-category"  value={task.length && selectedTask[0].name} />
            <br />
            <Button type="submit" variant="contained">Registration</Button>



        </form>
    );
};

export default Registration;


