import React from 'react';
import classes from './Toggle.scss';

const togglePlayers = (props) => {
    const togglePlayersSliderClasses = [
        classes.ToggleSlider,
        props.singlePlayer ? classes.TogglePlayersSliderLeft : classes.TogglePlayersSliderRight
    ];
    const togglePlayersClasses = [
        classes.TogglePlayers,
        props.singlePlayer ? classes.OnePlayer : classes.TwoPlayers
    ];

    return (
        <div className = {togglePlayersClasses.join(' ' )} onClick={props.clicked}>
                <div className = {togglePlayersSliderClasses.join(' ')}></div>
                <div className={classes.UserIcons}>
                    <div>
                        <i className="far fa-user"></i>
                    </div>
                    <div>
                        <i className="far fa-user"></i>
                        <i className="far fa-user"></i>
                    </div>
                </div>
        </div>
    )
}

export default togglePlayers;