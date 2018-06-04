import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => {
    const transClasses = [
        classes.Backdrop,
        props.transState === 'exiting' ? classes.BackdropFadeOut : null,
        props.transState === 'entering' ? classes.BackdropFadeIn : null
    ];
    return (
        <div 
            className = { transClasses.join(' ') } 
            onClick = { props.clicked } >
        </div>
    );
}
export default backdrop;