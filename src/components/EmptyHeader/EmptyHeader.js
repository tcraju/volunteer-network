import React from 'react';
import { useHistory } from 'react-router-dom';
import './EmptyHeader.css'


const EmptyHeader = () => {
    const history= useHistory()
    return (
        <div id='header-image'>
            <img onClick={() => history.push('/')} src="https://iili.io/2WPW5G.png" alt=""/>
        </div>
    );
};

export default EmptyHeader;