import React from 'react';

import classes from './NewGame.css';
import Aux from '../../../../hoc/Auxy';

class newGame extends React.Component {
    state = {
        on: true
    }

    toggle = () => {
        this.setState({on: !this.state.on});
    }

    render = () => {
        const toggleSliderClasses = [
            classes.ToggleSlider,
            this.state.on ? classes.ToggleSliderLeft : classes.ToggleSliderRight
        ];
        const toggleClasses = [
            classes.Toggle,
            this.state.on ? classes.OnePlayer : classes.TwoPlayers
        ];

        let singlePlayer = true;
     
        return (
            <Aux>
            <h2 className = {classes.Title}>Start new game</h2>
            <p>Players:</p>
            <div className = {toggleClasses.join(' ' )} onClick={this.toggle}>
                <div className = {toggleSliderClasses.join(' ')}></div>
                <div className={classes.UserIcon}>
                    <i className="far fa-user"></i>
                </div>
                <div className = {classes.UserIcon}>
                    <i className="far fa-user"></i>
                    <i className="far fa-user"></i>
                </div>
            </div>

            </Aux>
        )
    }

}

export default newGame;