import React, { useState } from 'react';
import Greetings from './Greetings';

const ConditionalRendering = (props) => {
    const [message, setMessage] = useState("Good Morning!");

    const updateGreeting = () => {
        if(props.time >= 18) {
            setMessage("Good evening")
        } else if (props.time <= 17) {
            setMessage("Good Afternoon")
        }
    }

    return (
        <div>
            <h3>Hi, Mr. Shafeeque, {message} - {props.time}</h3>
            <button onClick={updateGreeting}>Update Greetings</button>
        </div>
    )
}

export default ConditionalRendering;