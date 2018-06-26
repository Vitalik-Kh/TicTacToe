import React from 'react';
import classes from './GameLevels.scss';
import {v} from '../../../../../utilities/states';

const gameLevels = (props) => {
    const active = classes.ActiveLevel;
    return (
        <div className = { classes.GameLevels } >
            <div 
                className = {props.level === v.easy ? active : null }
                onClick = {() => props.clicked(v.easy) } >easy</div>
            <div 
                className = {props.level === v.normal ? active : null }
                onClick = {() => props.clicked(v.normal) } >normal</div>
            <div 
                className = {props.level === v.hard ? active : null }
                onClick = {() => props.clicked(v.hard) } >hard</div>
        </div>
    )
}

export default gameLevels;