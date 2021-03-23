import React from 'react';

class App extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            table : [{
                    Name: 'Peter',
                    Surname: 'Parker',
                    Age: '33',
                    City: 'New York'},
                {
                    Name: 'Vincent',
                    Surname: 'Vega',
                    Age: '35',
                    City: 'Los Angeless'     
                },
                {
                    Name: 'Jack',
                    Surname: 'Sparrow',
                    Age: '40',
                    City: 'Caribean Islands'
                },
                {
                    Name: 'Guy',
                    Surname: 'Ritchie',
                    Age: '40',
                    City: 'London'
                }
            ],
            inputValue: {Name: '', Surname: '', Age: '', City: ''}}
    }

    handleInput = (e) => {
        this.setState(() => ({inputValue: e.target.value}))
    }

    handleButtonAdd = () => {
        this.setState((prevState) => ({table: [...prevState.table]}))
    }
    
    render() {
        return (
        <div>
            <Input input={this.handleInput}/>
            <Input />
            <Input />
            <Input />
            <Button />
            <table>
                <thead><tr>{Object.keys(this.state.table[0]).map((item, index) => <th key={index}>{item}</th>)}</tr></thead>
                <tbody>{this.state.table.map((item, index) => <tr key={index}>{Object.values(item).map((item, index) => <td key={index}>{item}</td>)}</tr>)}</tbody>
            </table>
        </div>)
    
}}

function Input(props) {
    return(
        <input type='text' onChange={props.input}/>
    )
}

function Button() {
    return(
        <input type='button' value='add' />
    )
}

export default App;
