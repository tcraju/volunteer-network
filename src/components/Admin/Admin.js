import { Button, Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import AllEvent from '../AllEvent/AllEvent';
import InsertEvent from '../InsertEvent/InsertEvent';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [clickArea, setClickArea] = useState({
        clicked:'volunteerList'
    })

    console.log(clickArea);



    return (
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <div>
                        <Button id='register-btn' onClick={()=>setClickArea({clicked:'volunteerList'})}>Volunteer Register List</Button>
                        <br/>
                        <Button id='event-btn' onClick={()=>setClickArea({clicked:'addEvent'})}>Add Event</Button>
                    </div>

                </Grid>

                <Grid item md={8} id=''>
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