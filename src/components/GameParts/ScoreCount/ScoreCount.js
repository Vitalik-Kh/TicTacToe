import React from 'react';
import classes from './ScoreCount.scss';
import PlayerX from '../PlayerX/PlayerX';
import PlayerO from '../PlayerO/PlayerO';
import { v } from '../../../utilities/states';

const scoreCount = (props) => {
    return (
        <div className = { classes.ScoreCount_container }>
            <div className = { [
                classes.PlayersScore,
                props.currentPlayer === v.X ? classes.CurrentPlayerX : null
                ].join(' ') }>
                <div> <PlayerX /> </div>
                <div> { props.score.X } </div>
            </div>
            <div className = { classes.Draw } >
                <div> DRAW </div>
                <div> { props.score.draw } </div>
            </div>
            <div  className = { [
                classes.PlayersScore,
                props.currentPlayer === v.O ? classes.CurrentPlayerO : null
                ].join(' ') }>
                <div> <PlayerO /> </div>
                <div> { props.score.O } </div>
            </div>
        </div>
    );
}

export default scoreCount;