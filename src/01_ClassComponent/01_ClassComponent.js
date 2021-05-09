import React from 'react'

class ClassComponent extends React.Component {
    
    render() {
        return (
            <div>
                <p>Hello, I am a class component, I received this name from component as a "{this.props.name}"</p>
            </div>
        )
    }
}

export default ClassComponent;