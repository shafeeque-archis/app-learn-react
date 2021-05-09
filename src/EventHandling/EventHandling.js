import React, { useState } from 'react';
import './EventHandling.css'

const Button = () => {
    const [state, setState] = useState({isToggleOn: true})

    const toggleButton = () => {
        setState({isToggleOn: !state.isToggleOn})
    }

    return (
        <p>
            The Button is: <button onClick={toggleButton} className={state.isToggleOn ? 'is-enabled' : 'is-disabled'}>
                {state.isToggleOn ? 'On' : 'Off'}
            </button>
        </p>
    )
}

export default Button;