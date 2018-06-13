import React from 'react';
import Button from '../../../UI/Button/Button';
import classes from './playAgain.scss';
import v from '../../../../utilities/states';

const playAgain = (props) => {
    const confetti = [], rays = [];
    for (let i=1; i<=25; i++) { 
        confetti.push(<div key={i} className={classes['Confetti_' + i]}></div>) }
    for (let i=0; i<9; i++) { rays.push(<div key={i}></div>) }

    return (
        <div className = { classes.PlayAgain }>
            <div className = { classes.Rays_container }>
                {rays}
            </div>
            <div className = {classes.Podium_Container}>
                <div className = {classes.Podium}>
                    <div>2</div>
                    <div>1</div>
                    <div>3</div>
                </div>
            </div>
            <div className = { [classes.Winner, classes.O].join(' ') }>
                <div></div>
            </div>
            <div className = { classes.Confetti }>
                {confetti}
            </div>
            <div className={classes.Buttons}>
                <Button clicked={ props.playAgainBtnClicked }>Play again</Button>
                <Button clicked={ props.newGameBtnClicked }>New Game</Button>
            </div>
        </div>
    );
}

export default playAgain;