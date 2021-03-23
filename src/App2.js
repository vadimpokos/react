import React from 'react'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: ['Buy cheese', 'Clean a room', 'Call mom', 'Walk with a dog', 'Go to sleep before a midnight'],
            inputValue: '',
            indexToEdit: -1,
            isEdit: false
        }
    }

    handleInput = (e) => {
        this.setState(() => ({inputValue: e.target.value}))
    }

    handleButtonAdd = () => {
        this.state.inputValue === '' ? this.setState((state) => ({numbers: [...state.numbers]})) :
        this.setState((state) =>  ({numbers: [...state.numbers, state.inputValue], isEdit: false, inputValue: ''})
        )
    }

    handleButtonDelete = (i) => {
        // console.log(e.target)
        this.setState((state) => ( 
            {numbers: [...state.numbers.slice(0, i), ...state.numbers.slice(i + 1)]}
        ))
    }

    handleButtonEdit = (i) => {
        this.setState((state) => ({inputValue: state.numbers[i], indexToEdit: i, isEdit: true}))
    }

    handleButtonSave = () => {
        this.state.indexToEdit === -1 ?
        this.setState((state) => ({numbers: [...state.numbers]})) :
        this.setState((state) => (
            {numbers: [...state.numbers.slice(0, state.indexToEdit),
             state.inputValue,
            ...state.numbers.slice(state.indexToEdit + 1)],
            indexToEdit: -1,
            inputValue: '',
            isEdit: false
            })) 
    }

    handleButtonUp = (i) => {
        i === 0 ? this.setState((state) => ({numbers: [...state.numbers]})) : 
        i === this.state.numbers.length - 1 ? this.setState((state) => ({numbers: [...state.numbers.slice(0, i - 1), state.numbers[i], state.numbers[i-1]]})) :
        this.setState((state) => (
            {numbers: [...state.numbers.slice(0, i - 1), state.numbers[i], state.numbers[i-1], ...state.numbers.slice(-(state.numbers.length - i-1))]}))
    }

    handleButtonDown = (i) => {
        i === this.state.numbers.length - 2 ?
        this.setState((state) => ({numbers: [...state.numbers.slice(0, i), state.numbers[i+1], state.numbers[i]]})) :
        this.setState((state) => ({numbers: [...state.numbers.slice(0, i), state.numbers[i+1], state.numbers[i], ...state.numbers.slice(-(state.numbers.length - i-2))]}))
    }

    render() {
        return(
            <div>
                <Input func={this.handleInput} input={this.state.inputValue}/>
                <Button butText='Add' butFunc={this.handleButtonAdd}/>
                {this.state.isEdit ? <Button butFunc={this.handleButtonSave} butText='Save'/> : null}
                <List arr={this.state} del={this.handleButtonDelete} edit={this.handleButtonEdit} up={this.handleButtonUp} down={this.handleButtonDown}/>
            </div>
        )
    }
}

function List(props) {
    return (<ol>
        {props.arr.numbers.length === 0 ? <div>You have no ToDo`s, create some.</div> :
        props.arr.numbers.map((item, index, array) => {
            return <ListItem ar={array} id={index} value={item} key={index} del={() => props.del(index)}  edit={() => props.edit(index)} up={() => props.up(index)} down={() => props.down(index)}/>
        })}
        </ol>)
}

function ListItem(props) {
    return <li>
                {props.value}
                <Button butFunc={props.del} butText='del'/>
                <Button butFunc={props.edit} butText='edit'/>
                {props.id !== 0 ? <Button butFunc={props.up} butText='up'/> : null}
                {props.id !== props.ar.length - 1 ? <Button butFunc={props.down} butText='down'/> : null}
            </li>
}

function Input(props) {
    return <input type='text' onChange={props.func} value={props.input}/>
}

function Button(props) {
    return <input type='button' value={props.butText} onClick={props.butFunc}/>
}

export default App;