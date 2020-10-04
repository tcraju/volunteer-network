import React from 'react';
import fakeData from '../../fakeData'

const Admin = () => {

    const handleSubmit = (e) => {
                 
       fetch('http://localhost:5000/addJobCategory',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(fakeData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data); 
        })
        e.preventDefault();
    }





    return (
        <div>
            <button onClick={handleSubmit}>Insert All Job</button>
        </div>
    );
};

export default Admin;