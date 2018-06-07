import React from 'react';
import classes from './Toggle.scss';

const toggleXO = (props) => {
    const toggleXOSliderClasses = [
        classes.ToggleSlider,
        props.playWithX ? classes.ToggleXOSliderLeft : classes.ToggleXOSliderRight
    ];
    const toggleXOClasses = [
        classes.ToggleXO,
        props.playWithX ? classes.PlayX : classes.PlayO
    ]

    return (
        <div className = {toggleXOClasses.join(' ' )} onClick={props.clicked}>
                <div className = {toggleXOSliderClasses.join(' ')}></div>
                <div className={classes.UserIcons}>
                    <div>
                        <i className="fas fa-times"></i>
                    </div>
                    <div>
                        <i className="far fa-circle"></i>
                    </div>
                </div>
        </div>
    )
}

export default toggleXO;