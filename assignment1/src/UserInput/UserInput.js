import React from 'react';

const userInput = (props) => {
    return (
        <input style={props.style} type="text" onChange={props.handler} value={props.value}/>
    )
}

export default userInput;