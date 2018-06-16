import React from 'react';

import classes from './NewGame.scss';
import TogglePlayers from './Toggle/TogglePlayers';
import ToggleXO from './Toggle/ToggleXO';
import {v} from '../../../../utilities/states';
import Button from '../../../UI/Button/Button';
import Aux from '../../../../hoc/Auxy';

const newGame = (props) => {
    const singlePlayer = props.X === v.AI || props.O === v.AI ? true : false,
          playWithX = props.X === v.human ? true : false;

    let toggleXO = null;
    if (singlePlayer) {
        toggleXO = (
            <Aux>
                <p>Play with X or O:</p>
                <ToggleXO playWithX = {playWithX} clicked = {props.toggleXO}/>
            </Aux>
        );
    }
    return (
        <div className = { classes.NewGame_container }>
            <h2 className = {classes.Title}>Start new game</h2>
            <p>Players:</p>
            <TogglePlayers singlePlayer = {singlePlayer} clicked = {props.toggleGameMode}/> 
            { toggleXO }
            <div className = { classes.Button }>
                <Button clicked = {props.playBtnClicked}>PLAY</Button> 
            </div>    
        </div>
    )
}

export default newGame;