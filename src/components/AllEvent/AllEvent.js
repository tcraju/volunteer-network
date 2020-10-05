import { Container } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import AllEventChild from '../AllEventChild/AllEventChild';
import './AllEvent.css'

const AllEvent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [registeredTask, setRegisteredTask] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/registeredJob')
            .then(response => response.json())
            .then(data => setRegisteredTask(data))
        console.log(registeredTask);
    }, []);


    return (

            <tbody id="all-events">
                <tr>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Registration Date</th>
                    <th>Volunteer List</th>
                    <th>Action</th>
                </tr>
                {registeredTask.map((job) => (
                    <tr key={job._id} id={job._id}>
                        <AllEventChild singleJob={job} />
                    </tr>
                ))}
            </tbody>

    );
};

export default AllEvent;