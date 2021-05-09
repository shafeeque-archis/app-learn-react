import React from 'react'

function UserGreeting() {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}

const Greeting = (props) => {
    return(
        props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
    )
}

export default Greeting;