import React from 'react';
import classes from './Layout.css';

import Game from '../Game/Game';

class Layout extends React.Component {
    render() {
        return (
            
            <div className={classes.Container}>
                <h1 className={classes.Title}>Tic Tac Toe</h1>
                <Game />
            </div>
      
        )
    }
}

export default Layout;