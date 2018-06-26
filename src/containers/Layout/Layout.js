import React from 'react';
import classes from './Layout.css';

import Game from '../Game/Game';
import Social from '../../components/Social/Social';

const layout = (props) => {

    return (
        <div className={classes.Container}>
            <Game />
            <Social />
        </div>
    
    )

}

export default layout;