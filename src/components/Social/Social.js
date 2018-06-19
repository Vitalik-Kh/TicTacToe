import React from 'react';
import classes from './Social.scss';

const social = () => {

    return (
        <div className = { classes.Social } >
            <a href='https://www.facebook.com/vtlkx' target='_blank'>
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href='https://github.com/Vitalik-Kh' target='_blank'>
                <i className="fab fa-github"></i>
            </a>
            <a href='https://www.linkedin.com/in/vitalii-khymynets-18792375/' target='_blank'>
                <i className="fab fa-linkedin-in"></i>
            </a>  
        </div>
    )
}

export default social;