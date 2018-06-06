import React from 'react';

import Aux from '../../../hoc/Auxy';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import { Transition } from 'react-transition-group';

const modal = (props) => {
    return (
        <Transition 
            timeout = { 400 }
            in = { props.visible}
            unmountOnExit
            mountOnEnter >
            {state => {
                const transClasses = [
                    classes.Modal,
                    state === 'exiting' ? classes.ModalSlideOut : null,
                    state === 'entering' ? classes.ModalSlideIn : null
                ];
                return (
                    <Aux>
                        <Backdrop clicked = { props.backdropClicked } transState = { state }/>
                        <div className = { transClasses.join(' ') }>
                            { props.children }
                        </div>
                    </Aux>
                )
            }}
        </Transition>
    );
}

export default modal;