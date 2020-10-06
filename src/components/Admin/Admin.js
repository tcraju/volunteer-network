import { Button, Grid } from '@material-ui/core';
import React, {useState } from 'react';
import { useHistory } from 'react-router-dom';
import AllEvent from '../AllEvent/AllEvent';
import InsertEvent from '../InsertEvent/InsertEvent';
import './Admin.css'

const Admin = () => {
    const history = useHistory()
    const [clickArea, setClickArea] = useState({
        clicked:'volunteerList'
    })

    console.log(clickArea);



    return (
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <br/>
                    <br/>
                    <img id='home-logo' onClick={()=> history.push('/')} src="https://iili.io/2WPW5G.png" alt=""/>
                    <br/>
                    <br/>
                    <div className='toggle-item'>
                        <Button id='register-btn' onClick={()=>setClickArea({clicked:'volunteerList'})}>Volunteer Register List</Button>
                        <br/>
                        <Button id='event-btn' onClick={()=>setClickArea({clicked:'addEvent'})}>Add Event</Button>
                    </div>

                </Grid>

                <Grid item md={8} id=''>
                    <br/>
                    <br/>
                    <h3>Volunteer Register List</h3>
                    <br/>
                    <br/>
                    { clickArea.clicked == 'volunteerList' &&
                    <AllEvent></AllEvent>
                    }
                    { clickArea.clicked == 'addEvent' &&
                    <InsertEvent></InsertEvent>
                    }

                </Grid>
            </Grid>
    );
};

export default Admin;