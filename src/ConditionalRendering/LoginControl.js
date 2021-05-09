import React from 'react';
import Greetings from './Greetings';

function LoginBotton(props) {
    return(
        <button onClick={props.click}>Login</button>
    )
}

function LogoutButton(props) {
    return(
        <button onClick={props.click}>Logout</button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn) {
            button = <LogoutButton click={this.handleLogoutClick} />
        } else {
            button = <LoginBotton click={this.handleLoginClick} />
        }

        return (
            <div>
                <Greetings isLoggedIn={isLoggedIn} /> 
                {button}
            </div>
        )
    }
}

export default LoginControl;