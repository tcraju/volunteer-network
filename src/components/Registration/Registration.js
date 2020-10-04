import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData'








const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '60ch',
        },
    },
}));



const Registration = () => {
    const classes = useStyles();
    const {jobId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let selectedTask = fakeData.filter(x => x.id == jobId)


    const [volunteerInfo, setVolunteerInfo] = useState({
        taskId: jobId,
        description:'',
        workType:selectedTask[0].name
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
        
        const detailInfoForTask = {...loggedInUser, ...volunteerInfo, ...selectedDate}
        
        // console.log(detailInfoForTask);
        fetch('http://localhost:5000/addTask',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(detailInfoForTask)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

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
            <TextField id="standard-basic" name='description' label="Description" onBlur={handleBlur}/>
            <br />
            <TextField id="standard-basic"  value={selectedTask[0].name} />
            {/* <TextField id="standard-basic" name='workType' value={selectedTask[0].name} label="Organize books at the library" onBlur={handleBlur}/> */}
            <br />
            <Button type="submit" variant="contained" color="primary">Registration</Button>



        </form>
    );
};

export default Registration;


