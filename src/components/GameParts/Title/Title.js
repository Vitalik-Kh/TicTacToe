import React from 'react';
import {v} from '../../../utilities/states';

import classes from './Title.scss';

const title = (props) => {
    const titleClasses = [classes.Title];
    switch (props.level) {
        case v.easy:
            titleClasses.push(classes.EasyLevel);
            break;
        case v.normal:
            titleClasses.push(classes.NormalLevel);
            break;
        case v.hard:
            titleClasses.push(classes.HardLevel);
            break;
        default:
            null;
    }
    return (
        <h1 className={ titleClasses.join(' ') }>Tic Tac Toe</h1>
    )
}

export default title;