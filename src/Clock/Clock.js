import React, { useState } from 'react'

function FormatedDate(props) {
    return (
        <p>It is {props.date.toLocaleDateString()}</p>
    )
}

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.TimerID = setInterval(() => {
            this.tick()
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.TimerID);
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <FormatedDate date={this.state.date}/>
            </div>
        )
    }
  }
  

  export default Clock;