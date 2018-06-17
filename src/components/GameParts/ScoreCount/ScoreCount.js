import React from 'react';
import classes from './ScoreCount.scss';
import PlayerX from '../PlayerX/PlayerX';
import PlayerO from '../PlayerO/PlayerO';

const scoreCount = (props) => {
    return (
        <div className = { classes.ScoreCount_container }>
            <div className = { classes.PlayersScore }>
                <div> <PlayerX /> </div>
                <div> { props.score.X } </div>
            </div>
            <div className = { classes.Draw } >
                <div> DRAW </div>
                <div> { props.score.draw } </div>
            </div>
            <div  className = { classes.PlayersScore } >
                <div> <PlayerO /> </div>
                <div> { props.score.O } </div>
            </div>
        </div>
    );
}

export default scoreCount;