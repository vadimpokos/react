import React from 'react'
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        };
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState((state) => {
            return state.text = e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <Input text = {this.state.text} func = {this.handleChange} id = '1'/>
                <Input text = {this.state.text} func = {this.handleChange} id = '2'/>
            </div>
        )
    }
}

function Input(props) {
    return <input type = 'text' onChange = {props.func} value = {props.text} id = {props.id}/>
}


export default App;