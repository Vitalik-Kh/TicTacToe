import React from 'react';

import classes from './UserIcon.css';

const userIcon = (props) => {
    const iconClasses = [
        classes.UserIcon
    ];
    const iconStyle = {
        width: props.width || 'auto',
        height: props.height || 'auto',
        backgroundPosition: props.color === 'white' ? 
        '-' + props.width + ' 0px': '0px 0px'
    }
    const transpImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABMCAQAAABzV6kTAAAAQklEQVR42u3OAQ0AAAwCoNu/9GvoBgnIFYiEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISExE7iARf8AE3+pjKgAAAAAElFTkSuQmCC';
    return (
            <img
                style = { iconStyle }
                src={ transpImg }
                className = { iconClasses.join(' ') }
            />
    )
}

export default userIcon;