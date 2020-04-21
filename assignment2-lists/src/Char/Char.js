import React from 'react';

export const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        marging: '16px',
        border: '1px solid black',
        width: '16px'
    };

    let displayChar = '\u00A0';
    if (props.inputChar !== ' ') {
        displayChar = props.inputChar;
    }

    return (
        <p style={style}
           onClick={props.onClick} >
            {displayChar}
        </p>
    )
}

export default char;