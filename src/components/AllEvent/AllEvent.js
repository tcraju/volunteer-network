import React, { useEffect, useState } from 'react';
import AllEventChild from '../AllEventChild/AllEventChild';
import './AllEvent.css'

const AllEvent = () => {
    const [registeredTask, setRegisteredTask] = useState([]);

    useEffect(() => {
        fetch('https://polar-spire-08660.herokuapp.com/registeredJob')
            .then(response => response.json())
            .then(data => setRegisteredTask(data))
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