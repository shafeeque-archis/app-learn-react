import React from 'react'

class SimpleForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleTextAreaChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                Message:
                <textarea value={this.state.value} onChange={this.handleTextAreaChange} ></textarea>
                </label>
                
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SimpleForm;