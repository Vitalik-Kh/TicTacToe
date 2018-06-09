import React from 'react';
import classes from './Button.scss';

const button = (props) => {
    return (
        <button className = { classes.PlayBtn } onClick = { props.clicked }>
            { props.children }
        </button>
    );
}

export default button;