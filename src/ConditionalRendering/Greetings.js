import React from 'react'

function UserGreeting() {
    return <p>Welcome back User!</p>;
  }
  
  function GuestGreeting() {
    return <p>Please <a href="">sign up</a>.</p>;
}

const Greeting = (props) => {
    console.log(props.isLoggedIn);
    return(
        props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
    )
}

export default Greeting;