import React from 'react';

const AllEventChild = (props) => {
    const { _id, name, email, desiredDate, workType } = props.singleJob
  
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
        <>
        <td>{name}</td>
        <td>{email}</td>
        <td>{desiredDate.slice(0,10)}</td>
        <td>{workType}</td>
        <td className='del-btn' onClick={() => deleteHandler(_id)}><img src="https://iili.io/2Xjf87.jpg" alt=""/></td>
        </>
    );
};

export default AllEventChild;