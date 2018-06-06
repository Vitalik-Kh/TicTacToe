import React from 'react';

import classes from './NewGame.css';
import UserIcon from '../../../UI/UserIcon/UserIcon';
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

        return (
            <Aux>
            <h2 className = {classes.Title}>Start new game</h2>
            <p>Players:</p>
            <div className = {classes.Toggle} onClick={this.toggle}>
                <div className = {toggleSliderClasses.join(' ')}>
                    <UserIcon color='white' height='' width='56px'/>
                    <UserIcon color='white' height='' width='56px'/>
                </div>
                <div>
                    <UserIcon color='red' width='46px'/>
                </div>
                <div className = {classes.TwoUsersIconBack}>
                    <UserIcon color='red' width='46px'/>
                    <UserIcon color='red' width='46px'/>
                </div>
            </div>

            </Aux>
        )
    }

}

export default newGame;