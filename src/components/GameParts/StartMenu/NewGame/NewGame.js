import React from 'react';

import classes from './NewGame.scss';
import TogglePlayers from './Toggle/TogglePlayers';
import ToggleXO from './Toggle/ToggleXO';
import {v} from '../../../../utilities/states';
import Button from '../../../UI/Button/Button';
import Aux from '../../../../hoc/Auxy';
import { Transition } from 'react-transition-group';

const newGame = (props) => {
    const singlePlayer = props.X === v.AI || props.O === v.AI ? true : false,
          playWithX = props.X === v.human ? true : false;

    return (
        <div className = { classes.NewGame_container }>
            <h2 className = {classes.Title}>Start new game</h2>
            <p>Players:</p>
            <TogglePlayers singlePlayer = {singlePlayer} clicked = {props.toggleGameMode}/> 
            <Transition
                in = { singlePlayer }
                timeout = { 400 }
                mountOnEnter unmountOnExit >
                {state => {
                    let toggleClasses = [classes.ToggleXO_container];
                    if (state === 'exiting') { toggleClasses.push(classes.ToggleXO_slideUp) }
                    if (state === 'entering') { toggleClasses.push(classes.ToggleXO_slideDown) }
                    return (
                        <div className = { toggleClasses.join(' ') }>
                            <p>Play with X or O:</p>
                            <ToggleXO playWithX = { playWithX } clicked = { props.toggleXO } />
                        </div>
                    )
                }}
            </Transition>
            <div className = { classes.Button }>
                <Button clicked = {props.playBtnClicked}>PLAY</Button> 
            </div>    
        </div>
    )
}

export default newGame;